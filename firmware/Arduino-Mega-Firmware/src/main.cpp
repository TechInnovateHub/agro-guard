#include <AccelStepper.h>
#define dirPinStepper    4
#define enablePinStepper 6
//#define stepPinStepper   9


AccelStepper stepper1(AccelStepper::DRIVER, 9, 4);

#define  MAX_SPEED 5000
#define  MIN_SPEED 0.1

int x_key = A2;
int y_key = A3;
static int x_pos;  // forward reverse
static int y_pos;   //  stearing




static int motor_speed;
int motor_speed1;
 static int motor_links;
static int motor_rechts;

static int faktorL1;  //steering correction factor
static int faktorR1;  //steering correction factor


void setup() {
  // The only AccelStepper value we have to set here is the max speeed, which is higher than we'll ever go
  
  stepper1.setMaxSpeed(10000.0);

  pinMode (4, OUTPUT);

  pinMode (6, OUTPUT);
 
  

}

void loop() {




 static int current_speed = 0;         // Holds current motor speed in steps/second
  static int analog_read_counter ;    // Counts down to 0 to fire analog read
  static char sign = 0;                     // Holds -1, 1 or 0 to turn the motor on/off and control direction
  static int analog_value = 0;              // Holds raw analog value.

 if (analog_read_counter > 0) {
   analog_read_counter--; }
  
      analog_read_counter = 1000;
      
  faktorL1 = map (y_pos, 530, 650, 1, 3000);
  faktorL1 = constrain ( faktorL1, 0, 3000);

  faktorR1 = map (y_pos, 510, 410, 1, 3000);
  faktorR1 = constrain ( faktorR1, 0, 3000);


 x_pos = analogRead (x_key) ;  //Reading the forward reverse value 240 tot 870 center value 520
 
  y_pos = analogRead (y_key) ;  //Reading the steering value


 if (x_pos > 530 && x_pos < 900 ) { 
//forward
 //stepper1.runSpeed();
////
 
 digitalWrite (dirPinStepper, HIGH);
    digitalWrite (enablePinStepper, HIGH);

    motor_speed = map(x_pos, 510, 860, 1, 5000);   
    motor_speed = constrain ( motor_speed, 0, 5000);



    ;
    motor_rechts = (motor_speed - faktorR1);
    motor_links = ( motor_speed -  faktorL1);
    motor_links = constrain ( motor_links, 0, 5000);
    motor_rechts = constrain ( motor_rechts, 0, 5000);

stepper1.setSpeed(motor_links); 
    stepper1.runSpeed();
 }

else if (x_pos > 500 && x_pos < 520) { //X throttle center

  motor_speed = 0;
}



else if (x_pos < 500 && x_pos > 240)  //X reverse


  {digitalWrite (dirPinStepper, LOW);
  digitalWrite (enablePinStepper, HIGH);

  motor_speed = map(x_pos, 520, 240, 1, 5000);
  motor_speed = constrain ( motor_speed, 0, 5000);

  motor_rechts = (motor_speed - faktorL1);
  motor_links = ( motor_speed  - faktorR1);

  motor_links = constrain ( motor_links, 0, 5000);
  motor_rechts = constrain ( motor_rechts, 0, 5000);

 
  }




else {
  motor_speed = 0 ;

  digitalWrite (enablePinStepper, LOW);
}


//Serial.println(x_pos);


















}
