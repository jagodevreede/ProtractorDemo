package org.demo.protractor.upload;

import java.io.IOException;
import java.nio.file.Files;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.IOUtils;
import org.apache.felix.dm.annotation.api.Component;

@Component(provides = Object.class)
@Path("/upload")
public class FileUploadResource {
	
	private volatile Map<String, org.demo.protractor.upload.FileItem> files = new HashMap<>();

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public String uploadFile(@Context HttpServletRequest request) {
		try {
			if (!ServletFileUpload.isMultipartContent(request)) {
				throw new WebApplicationException(Status.BAD_REQUEST);
			}

			FileItem filestream = parseUploadRequest(request);
			if (filestream == null) {
				throw new WebApplicationException(Status.BAD_REQUEST);
			}
			
			byte[] bs = IOUtils.toByteArray(filestream.getInputStream());
			String shaHash = getShaHash(bs);
			
			org.demo.protractor.upload.FileItem item = new org.demo.protractor.upload.FileItem();
			item.bs = bs;
			item.contentType = filestream.getContentType();

			files.put(shaHash, item);
			
			return "{\"id\":" + shaHash + "}";
		} catch (Exception exception) {
			throw new WebApplicationException(Status.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GET
	@Path("{filename}")
	public Response getFile(String filename) {
		org.demo.protractor.upload.FileItem fileItem = files.get(filename);
		if (fileItem == null) {
			throw new WebApplicationException(Status.NOT_FOUND);
		}
		return Response.ok(fileItem.bs, fileItem.contentType).build();
	}

	private FileItem parseUploadRequest(HttpServletRequest request) {
		Integer uploadLimit = 50 * 1024 * 1024;

		try {
			// File upload handler with same limit as filesize, should never hit the disk
			ServletFileUpload upload = new ServletFileUpload(
					new DiskFileItemFactory(uploadLimit, Files.createTempDirectory("demo-upload").toFile()));
			upload.setFileSizeMax(uploadLimit);
			upload.setSizeMax(uploadLimit);

			@SuppressWarnings("unchecked")
			List<FileItem> items = upload.parseRequest(request);

			for (FileItem item : items) {
				if (!item.isFormField()) {
					return item;
				}
			}
			throw new WebApplicationException(Status.BAD_REQUEST);
		} catch (FileUploadException | IOException e) {
			throw new WebApplicationException(e, 413);
		}

	}
	
	private String getShaHash(byte[] bs) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");

            byte[] hash = md.digest(bs);

            StringBuffer sb = new StringBuffer();
            for (byte b : hash) {
                if (b < 16)
                    sb.append("0");
                sb.append(Integer.toHexString(b & 0xff));
            }

            return sb.toString();
        }
        catch (NoSuchAlgorithmException  e) {
            throw new RuntimeException(e);
        }
    }

}
