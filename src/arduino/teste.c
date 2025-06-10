void setup() {
    Serial.begin(115200);
}

void loop() {
    while (Serial.available() > 0) {
        
    }
}

void readCommand() {
    while (Serial.available() > 0) {
        int c = Serial.read();

        if (c == 0) {
            int m1 = Serial.read();
            int m2 = Serial.read();
            int m3 = Serial.read();
            int m4 = Serial.read();
            
        } if (c == 1) {

        }
    }
}

void moveMotors() {
    
}
