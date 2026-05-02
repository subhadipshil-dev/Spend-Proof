import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { styled } from 'nativewind';
import '../../nativewind/index.css';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);
const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);

export default function RegisterScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBackPress = () => {
    // Navigation logic would go here
    console.log('Back pressed');
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className={`${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
        showsVerticalScrollIndicator={false}
      >
        <StyledView
          className={`flex-1 justify-between px-6 pt-6 pb-12 ${
            isDark ? 'bg-dark-navy' : 'bg-gray-50'
          }`}
        >
          {/* Header */}
          <StyledView>
            {/* Back Button */}
            <StyledTouchable
              onPress={handleBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              className="mb-6 w-10"
            >
              <StyledText className="text-2xl">←</StyledText>
            </StyledTouchable>

            {/* Title */}
            <StyledText className="text-3xl font-bold text-white mb-2">
              Create Account
            </StyledText>

            {/* Subtitle */}
            <StyledText className="text-base text-muted-gray mb-8">
              Join SpendProof for free
            </StyledText>
          </StyledView>

          {/* Form Section */}
          <StyledView className="gap-4 mb-8 flex-1">
            {/* Full Name Input */}
            <StyledView className="gap-2">
              <StyledView
                className={`flex-row items-center gap-3 px-4 py-3 rounded-xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <StyledText className="text-xl">👤</StyledText>
                <StyledTextInput
                  placeholder="Full Name"
                  placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                  className={`flex-1 text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                />
              </StyledView>
            </StyledView>

            {/* Email Input */}
            <StyledView className="gap-2">
              <StyledView
                className={`flex-row items-center gap-3 px-4 py-3 rounded-xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <StyledText className="text-xl">✉️</StyledText>
                <StyledTextInput
                  placeholder="Email"
                  placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className={`flex-1 text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                />
              </StyledView>
            </StyledView>

            {/* Password Input */}
            <StyledView className="gap-2">
              <StyledView
                className={`flex-row items-center gap-3 px-4 py-3 rounded-xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <StyledText className="text-xl">🔒</StyledText>
                <StyledTextInput
                  placeholder="Password"
                  placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className={`flex-1 text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                />
                <StyledTouchable
                  onPress={() => setShowPassword(!showPassword)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <StyledText className="text-xl">
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </StyledText>
                </StyledTouchable>
              </StyledView>
            </StyledView>

            {/* Confirm Password Input */}
            <StyledView className="gap-2">
              <StyledView
                className={`flex-row items-center gap-3 px-4 py-3 rounded-xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <StyledText className="text-xl">🔒</StyledText>
                <StyledTextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  className={`flex-1 text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                />
                <StyledTouchable
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <StyledText className="text-xl">
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </StyledText>
                </StyledTouchable>
              </StyledView>
            </StyledView>

            {/* Register Button */}
            <StyledTouchable
              activeOpacity={0.85}
              className="bg-primary py-4 rounded-xl items-center shadow-lg mt-4"
            >
              <StyledText className="text-white text-lg font-bold">
                Register
              </StyledText>
            </StyledTouchable>
          </StyledView>

          {/* Login Link */}
          <StyledView className="flex-row justify-center gap-2">
            <StyledText
              className={`text-base ${
                isDark ? 'text-light-gray' : 'text-muted-gray'
              }`}
            >
              Already have an account?
            </StyledText>
            <StyledTouchable>
              <StyledText className="text-base font-semibold text-primary">
                Login
              </StyledText>
            </StyledTouchable>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  );
}
