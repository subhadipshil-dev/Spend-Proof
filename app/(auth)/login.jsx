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

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
          className={`flex-1 justify-between px-6 pt-16 pb-12 ${
            isDark ? 'bg-dark-navy' : 'bg-gray-50'
          }`}
        >
          {/* Header Section */}
          <StyledView className="items-center mb-12">
            {/* Logo */}
            <StyledView className="mb-4 flex-row justify-center items-baseline">
              <StyledText className="text-4xl font-bold text-white">
                Spend
              </StyledText>
              <StyledText className="text-4xl font-bold text-primary">
                Proof
              </StyledText>
            </StyledView>

            {/* Tagline */}
            <StyledText className="text-base text-muted-gray">
              Shop Smart. Stay Proof.
            </StyledText>
          </StyledView>

          {/* Form Section */}
          <StyledView className="gap-6 mb-8">
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
                  editable={true}
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

            {/* Forgot Password Link */}
            <StyledTouchable>
              <StyledText className="text-right text-sm font-semibold text-primary">
                Forgot password?
              </StyledText>
            </StyledTouchable>

            {/* Login Button */}
            <StyledTouchable
              activeOpacity={0.85}
              className="bg-primary py-4 rounded-xl items-center shadow-lg mt-4"
            >
              <StyledText className="text-white text-lg font-bold">
                Login
              </StyledText>
            </StyledTouchable>
          </StyledView>

          {/* Divider Section */}
          <StyledView className="flex-row items-center gap-4 mb-6">
            <StyledView
              className={`flex-1 h-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
            />
            <StyledText
              className={`text-sm ${
                isDark ? 'text-muted-gray' : 'text-muted-gray'
              }`}
            >
              or
            </StyledText>
            <StyledView
              className={`flex-1 h-px ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
            />
          </StyledView>

          {/* Google Sign In Button */}
          <StyledTouchable
            activeOpacity={0.85}
            className={`flex-row items-center justify-center gap-3 py-4 rounded-xl border-2 ${
              isDark ? 'bg-white border-white' : 'bg-white border-gray-200'
            } mb-12`}
          >
            <StyledText className="text-2xl">🔵</StyledText>
            <StyledText
              className={`text-lg font-semibold ${
                isDark ? 'text-gray-900' : 'text-gray-900'
              }`}
            >
              Sign in with Google
            </StyledText>
          </StyledTouchable>

          {/* Register Link */}
          <StyledView className="flex-row justify-center gap-2">
            <StyledText
              className={`text-base ${
                isDark ? 'text-light-gray' : 'text-muted-gray'
              }`}
            >
              Don't have an account?
            </StyledText>
            <StyledTouchable>
              <StyledText className="text-base font-semibold text-primary">
                Register
              </StyledText>
            </StyledTouchable>
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  );
}
