import React, { useState } from "react";
import { View, Text, SafeAreaView, Picker } from "react-native";
import Styles from "./appointmentStyles";
import Header from "../../header/Header";
import NewFooter from "../../newFooter/NewFooter";
import BackgroundAndOverlay from "../../reusable/BackgroundAndOverlay";
import CalendarPicker from "react-native-calendar-picker";
import Time from "./Time";
import moment from "moment/moment";
import { TouchableOpacity } from "react-native-web";
import cardData from "../../data/servicesData";
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("Select a Service");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const today = moment();
  const disabledDate = (current) => {
    return (
      current < Date.now() ||
      new Date(current).getDay() === 0 /*Sunday*/ ||
      new Date(current).getDay() === 6 /*Saturday*/
    );
  };

  const isServiceSelected = selectedService !== "Select a Service";
  const isConfirmationEnabled =
    selectedDate && selectedTime && isServiceSelected;
  const serviceTitles = cardData.map((item) => item.title);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundAndOverlay>
        <Header />
        <View style={Styles.darkBox}>
          <Text style={Styles.title}>Schedule</Text>
        </View>
        <View style={Styles.content}>
          {!isServiceSelected ? (
            // Render service selection here
            <View style={Styles.serviceContainer}>
              <Text style={Styles.serviceLabel}>Select a Service:</Text>
              <Picker
                selectedValue={selectedService}
                onValueChange={handleServiceSelect}
                style={Styles.servicePicker}
              >
                <Picker.Item
                  label="Select a Service"
                  value="Select a Service"
                />
                {serviceTitles.map((title) => (
                  <Picker.Item key={title} label={title} value={title} />
                ))}
              </Picker>
            </View>
          ) : (
            // Render content when service is selected
            <>
              <View style={Styles.calendarContainer}>
                <CalendarPicker
                  style={Styles.calendar}
                  disabledDates={disabledDate}
                  disabledDate={disabledDate}
                  selectedDate={selectedDate}
                  minDate={today}
                  onDateChange={handleDateSelect}
                  selectedDayColor="rgba(156, 156, 156, 1)"
                />
                <Time onTimeSelect={handleTimeSelect} />
              </View>
              <View style={Styles.messageBox}>
                {selectedDate && selectedTime ? (
                  <View>
                    <Text style={Styles.messageText}>
                      Your {selectedService} is Scheduled for:{" "}
                    </Text>
                    <Text style={Styles.messageText}>
                      {moment(selectedDate).format("MMM-DD-YYYY")}@{" "}
                      {selectedTime}
                    </Text>
                  </View>
                ) : selectedDate ? (
                  <Text style={Styles.messageText}>
                    Your Appointment is for:{" "}
                    {moment(selectedDate).format("MMM-DD-YYYY")}
                  </Text>
                ) : (
                  <Text style={Styles.messageText}>
                    Please select a date and time for your appointment.
                  </Text>
                )}
              </View>
              {isConfirmationEnabled && (
                <TouchableOpacity style={Styles.button}>
                  <Text style={Styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>

        <NewFooter />
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};

export default Appointment;
