#include <Printers.h>
#include <XBee.h>
#include "Air_Quality_Sensor.h"

AirQualitySensor sensor(A0);
uint8_t payload[6];

XBee xbee = XBee();
void setup() {
    Serial.begin(9600);
    xbee.setSerial(Serial);
    randomSeed(analogRead(0));
    Serial.println("Waiting sensor to init...");
    delay(20000);
    if (sensor.init()) {
        Serial.println("Sensor ready.");
    } else {
        Serial.println("Sensor ERROR!");
    }

    
}

void loop() {

    int quality = sensor.slope();
    Serial.print("Sensor value: ");
    Serial.println(sensor.getValue());
    Serial.println(quality);
    
    uint8_t payload[6];     
    for (int i = 0; i < 5; ++i) {
        payload[i] = random(0, 256);
    }
    
    payload[5] = quality;
    
    XBeeAddress64 addr64 = XBeeAddress64(0x0013a200, 0x416B4e73);
    ZBTxRequest zbTx = ZBTxRequest(addr64, payload, sizeof(payload));
    xbee.send(zbTx);
    delay(3000);

}
