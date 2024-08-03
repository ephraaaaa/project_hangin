import time
from digi.xbee.devices import XBeeDevice

router = XBeeDevice("/dev/ttyUSB0", 9600)
router.open()

print("Router MAC Address: ", router)


while True:
	xbee_message = router.read_data()
	if xbee_message is None:
		print("No data received")
	else:
		data = xbee_message.data
		byte_arr = data
		int_values = list(byte_arr)
		print(int_values)

	time.sleep(3)

