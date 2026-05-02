import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  ScrollView,
  FlatList,
} from 'react-native';
import { styled } from 'nativewind';
import '../../nativewind/index.css';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);

// Dummy mall data
const malls = [
  'D-Mart',
  'Reliance Smart Point',
  'Vishal Mega Mart',
  'Big Bazaar',
  'More Supermarket',
  "Spencer's",
  'Star Bazaar',
  'Lulu Hypermarket',
  'V-Mart',
  'Custom',
];

// Mall Card Component
const MallCard = ({ name, isSelected, onPress, isDark }) => (
  <StyledTouchable
    onPress={onPress}
    activeOpacity={0.7}
    className={`flex-1 p-4 rounded-2xl items-center justify-center min-h-24 mx-2 my-2 ${
      isSelected
        ? 'bg-primary border-2 border-primary'
        : isDark
          ? 'bg-gray-800 border border-gray-700'
          : 'bg-gray-100 border border-gray-200'
    }`}
  >
    <StyledText
      className={`text-center text-sm font-semibold ${
        isSelected ? 'text-white' : isDark ? 'text-light-gray' : 'text-gray-900'
      }`}
    >
      {name}
    </StyledText>
  </StyledTouchable>
);

export default function CheckInScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedMall, setSelectedMall] = useState('D-Mart');
  const [budget, setBudget] = useState('');
  const [timeLimit, setTimeLimit] = useState('');

  const handleBackPress = () => {
    // Navigation logic would go here
    console.log('Back pressed');
  };

  const handleCheckIn = () => {
    // Check-in logic would go here
    console.log('Check in to', selectedMall, 'Budget:', budget, 'Time:', timeLimit);
  };

  return (
    <StyledView
      className={`flex-1 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
    >
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className={`${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <StyledView
          className={`flex-row items-center px-6 pt-6 pb-8 ${
            isDark ? 'bg-dark-navy' : 'bg-gray-50'
          }`}
        >
          <StyledTouchable
            onPress={handleBackPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            className="w-10"
          >
            <StyledText className="text-2xl">←</StyledText>
          </StyledTouchable>
          <StyledText className="flex-1 text-center text-3xl font-bold text-white">
            Check In
          </StyledText>
          <StyledView className="w-10" />
        </StyledView>

        {/* Content */}
        <StyledView className="flex-1 px-6 pb-8">
          {/* Select Mall Section */}
          <StyledView className="mb-10">
            <StyledText className="text-xl font-bold text-white mb-4">
              Select Mall
            </StyledText>
            <StyledView className="flex-row flex-wrap justify-between">
              {malls.map((mall, index) => (
                <StyledView
                  key={index}
                  className="w-1/2"
                >
                  <MallCard
                    name={mall}
                    isSelected={selectedMall === mall}
                    onPress={() => setSelectedMall(mall)}
                    isDark={isDark}
                  />
                </StyledView>
              ))}
            </StyledView>
          </StyledView>

          {/* Set Budget Section */}
          <StyledView className="mb-10">
            <StyledText className="text-lg font-bold text-white mb-3">
              Set Budget (Optional)
            </StyledText>
            <StyledView
              className={`flex-row items-center gap-2 px-4 py-3 rounded-xl border ${
                isDark
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              <StyledText
                className={`text-lg font-semibold ${
                  isDark ? 'text-light-gray' : 'text-muted-gray'
                }`}
              >
                ₹
              </StyledText>
              <StyledTextInput
                placeholder="e.g. 1000"
                placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                value={budget}
                onChangeText={setBudget}
                keyboardType="decimal-pad"
                className={`flex-1 text-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              />
            </StyledView>
          </StyledView>

          {/* Set Time Limit Section */}
          <StyledView className="mb-16">
            <StyledText className="text-lg font-bold text-white mb-3">
              Set Time Limit (Optional)
            </StyledText>
            <StyledView
              className={`flex-row items-center gap-3 px-4 py-3 rounded-xl border ${
                isDark
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              <StyledText className="text-lg">🕐</StyledText>
              <StyledTextInput
                placeholder="e.g. 30 minutes"
                placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                value={timeLimit}
                onChangeText={setTimeLimit}
                className={`flex-1 text-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              />
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScrollView>

      {/* Check In Button */}
      <StyledView
        className={`px-6 py-4 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'} border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <StyledTouchable
          onPress={handleCheckIn}
          activeOpacity={0.85}
          className="bg-primary py-4 rounded-xl items-center shadow-lg"
        >
          <StyledText className="text-white text-lg font-bold">
            Check In
          </StyledText>
        </StyledTouchable>
      </StyledView>
    </StyledView>
  );
}
