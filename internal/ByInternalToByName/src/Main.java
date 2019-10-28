import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;

public class Main {
	private static JsonParser parser = new JsonParser();
	
	public static void main(String[] args) {
		System.out.println("Starting Conversion Process...");
		
		String filePath = "";
		
		if(args.length > 0) {
			// Load from args
			filePath = args[1];
			System.out.println("Loading file from provided argument...");
		} else {
			// Load from jar path
			try {
				filePath = new File(URLDecoder.decode(Main.class.getProtectionDomain().getCodeSource().getLocation().getPath(), "UTF-8")).getParentFile().getPath() + "\\ByInternal.json";
				System.out.println("Loading file from relative location...");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}

		System.out.println("Detected File: " + filePath);
		
		// File provided? If not, terminate on code 1
		if(filePath == "") {
			terminate(1, "Terminating. No file provided.");
		}
		
		File file = new File(filePath);
		
		if(file.isDirectory()) {
			terminate(2, "Terminating. Provided file isn't a file.");
		}
		
		// File exists? If not, terminate on code 2
		if(!file.exists()) {
			terminate(2, "Terminating. Provided file doesn't exist.");
		}
		
		String rawJSON = "";
		
		try {
			rawJSON = new String(Files.readAllBytes(Paths.get(file.getAbsolutePath())));
		} catch (IOException e) {
			e.printStackTrace();
			terminate(3, "Terminating. Failed to read provided file.");
		}
		
		if(rawJSON == "") {
			terminate(4, "Provided file was empty.");
		}

		JsonObject ByInternals = parser.parse(rawJSON).getAsJsonObject();
		JsonObject ByName = new JsonObject();
		
		// Lets Loop Through
		for(Map.Entry<String, JsonElement> entry: ByInternals.entrySet()) {
			if(!entry.getKey().equalsIgnoreCase("//")) {
				System.out.println("Entry: '" + entry.getKey() + "'");
				JsonObject temp = ByInternals.get(entry.getKey()).getAsJsonObject();
				
				JsonElement name = temp.get("Name");
				JsonElement type = temp.get("Type");
				JsonElement subtype = temp.get("Subtype");
				
				JsonObject temp2 = new JsonObject();
				temp2.addProperty("Internal", entry.getKey());
				temp2.add("Type", type);
				temp2.add("Subtype", subtype);
				
				ByName.add(name.getAsString(), temp2);
			}
		}
		
		String fileOut = file.getParentFile().getPath() + "\\ByName.json";
		
		System.out.println("Finished parsing provided file. Outputting file to: " + fileOut);
		
		Gson gson = new GsonBuilder().disableHtmlEscaping().setPrettyPrinting().create();
		
		String dataOut = gson.toJson(ByName);
		
		try {
			Files.write(Paths.get(fileOut), dataOut.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
			terminate(-1, "Failed to write output file data.");
		}
	}
	
	public static void terminate(int code, String message) {
		System.out.println(message);
		System.exit(code);
	}
}
