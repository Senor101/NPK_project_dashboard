// #include <ESP8266WiFi.h>

// const char* ssid = "Germany";
// const char* password = "lordbro@555";
// const char* server = "192.168.16.101";

// void setup() {
//   Serial.begin(115200);
//   WiFi.begin(ssid, password);

//   while (WiFi.status() != WL_CONNECTED) {
//     delay(1000);
//     Serial.println("Connecting to WiFi...");
//   }

//   Serial.println("Connected to WiFi");
// }

// void loop() {
//   // Define the data you want to send
//   int data = 123;

//   // Connect to the Node.js server
//   WiFiClient client;
//   if (!client.connect(server, 3000)) {
//     Serial.println("Connection failed");
//     return;
//   }

//   // Send the data as a GET request
//   client.print("GET /data?data=");
//   client.print(data);
//   client.println(" HTTP/1.1");
//   client.println("Host: 192.168.0.100:3000");
//   client.println("Connection: close");
//   client.println();

//   // Read the response from the server
//   while (client.available()) {
//     Serial.write(client.read());
//   }

//   client.stop();
//   delay(5000);
// }
