import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

const TimeSelection = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a time:</Text>
      <Picker
        selectedValue={selectedTime}
        onValueChange={handleTimeSelect} // Use handleTimeSelect here
        style={styles.picker}
      >
        <Picker.Item label="Please Select" />
        <Picker.Item label="8:00 AM" value="08:00 AM" />
        <Picker.Item label="9:00 AM" value="09:00 AM" />
        <Picker.Item label="10:00 AM" value="10:00 AM" />
        <Picker.Item label="11:00 AM" value="11:00 AM" />
        <Picker.Item label="12:00 PM" value="12:00 PM" />
        <Picker.Item label="1:00 PM" value="01:00 PM" />
        <Picker.Item label="2:00 PM" value="02:00 PM" />
        <Picker.Item label="3:00 PM" value="03:00 PM" />
        <Picker.Item label="4:00 PM" value="04:00 PM" />
      </Picker>

      {/* <Text style={styles.selectedTime}>Selected Time: {selectedTime}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedTime: {
    fontSize: 16,
    marginTop: 10,
  },
  picker: {
    height: 30,
    width: 120,
  },
});

export default TimeSelection;
