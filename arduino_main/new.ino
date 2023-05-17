#include <ESP8266WiFi.h>

const char* ssid = "Germany";
const char* password = "lordbro@555";
const char* server = "192.168.16.107";

void setup() {
  Serial.begin(115200);
    pinMode(16,OUTPUT);
  pinMode(5,OUTPUT);
  pinMode(4, OUTPUT);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}
  bool datasent = false;
void loop() {
  // Define the data you want to send
  float data = analogRead(A0);

  // Connect to the Node.js server
  WiFiClient client;
  if (!client.connect(server, 3000)) {
    Serial.println("Connection failed");
    return;
  }else {
    Serial.println("Connection Succedded");
  }
  

  float data1,data2,data3;
  
  if(!datasent) {
  int counter = 0;
  while(counter<3) {
    delay(10000);      
    if(counter == 0) {
      digitalWrite(4,LOW);
      digitalWrite(16,HIGH);
      data1 = data;
    } else if(counter == 1) {
      digitalWrite(16,LOW);
      digitalWrite(5,HIGH);
      data2 = data;
    }
    else if(counter == 2) {
      digitalWrite(5,LOW);
      digitalWrite(4,HIGH);
      data3 = data;
    }  
    counter++;  
        // Send the data as a GET request

  }
    client.print("GET /data");
  client.print("?data1=");
  client.print(data1);
  client.print("&data2=");
  client.print(data2);
  client.print("&data3=");
  client.print(data3);
  client.println(" HTTP/1.1");
  client.println("Host: 192.168.16.1:3000");
  client.println("Connection: close");
  client.println();
  datasent = true;
  }

  // Read the response from the server
  while (client.available()) {
    Serial.write(client.read());
  }

  client.stop();
}

