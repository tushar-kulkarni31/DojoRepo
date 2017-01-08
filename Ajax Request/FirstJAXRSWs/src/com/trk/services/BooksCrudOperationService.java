package com.trk.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/bookscrudoperationservice")
public class BooksCrudOperationService {

	@GET
	@Produces({MediaType.TEXT_PLAIN,MediaType.TEXT_PLAIN,MediaType.APPLICATION_JSON})
	public String sayHello(){
		String response = "{\"userId\":\"1234\",\"userName\":\"Tushar\"}";
		return response;
	}
}
