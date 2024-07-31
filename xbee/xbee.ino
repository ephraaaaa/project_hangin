#include <Printers.h>
#include <XBee.h>

  uint8_t payload[6];

XBee xbee = XBee();
void setup() {
    Serial.begin(9600);
    xbee.setSerial(Serial);
    randomSeed(analogRead(0));
}

void loop() {
    for (int i = 0; i < 6; ++i) {
        payload[i] = random(0, 256);
    }
    XBeeAddress64 addr64 = XBeeAddress64(0x0013a200, 0x416B4e73);
    ZBTxRequest zbTx = ZBTxRequest(addr64, payload, sizeof(payload));
    xbee.send(zbTx);
    delay(3000);
}
