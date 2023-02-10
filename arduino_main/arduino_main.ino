#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <WebSocketsClient.h>
#include <ArduinoJson.h>


const char* ssid = "Germany";   //Your wifi ssid
const char* password = "lordbro@555";   //Your wifi password
const char* server_address = "192.168.16.106";   //Your server(machine)'s ip   

bool dataSent = false;

WebSocketsClient webSocket;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");

  // Connection to the node server on port 80 of your machine
  webSocket.begin(server_address, 3000, "/");
  webSocket.onEvent(webSocketEvent);
}
   
void loop() {
   // Check if the WebSocket connection is established
    // Create a JSON document    
    StaticJsonDocument<200> doc;
    doc["LED1"] = 25;
    doc["LED2"] = 30;
    doc["LED3"] = 35;

    // Serialize the JSON document
    String message;
    serializeJson(doc, message);

    // Send the serialized JSON string as a WebSocket message
  // delay(5000);
  // Call the loop method of the WebSocketsClient  
      webSocket.sendTXT(message.c_str());    
      // dataSent = true;
    webSocket.loop();
}

void webSocketEvent(WStype_t type, uint8_t* payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED:
      Serial.println("Disconnected from server");
      break;
    case WStype_CONNECTED:
      Serial.println("Connected to server");

      break;
    case WStype_TEXT:
      Serial.println("Received message: ");
      Serial.print((char*)payload);
      break;
    default:
      Serial.println("Received unknown event");
      break;
  }
}

