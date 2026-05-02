import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  ScrollView,
  Dimensions,
} from 'react-native';
import { styled } from 'nativewind';
import '../../nativewind/index.css';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);

const { width } = Dimensions.get('window');
const frameSize = width - 80; // Scanner frame size

// Tab Button Component
const TabButton = ({ label, isActive, onPress, isDark }) => (
  <StyledTouchable
    onPress={onPress}
    className={`flex-1 py-3 items-center justify-center border-b-2 ${
      isActive
        ? 'border-primary'
        : isDark
          ? 'border-gray-700'
          : 'border-gray-300'
    }`}
  >
    <StyledText
      className={`text-sm font-semibold ${
        isActive ? 'text-primary' : isDark ? 'text-muted-gray' : 'text-muted-gray'
      }`}
    >
      {label}
    </StyledText>
  </StyledTouchable>
);

// State 1: Camera View Component
const CameraView = ({ isDark, onCancel }) => (
  <StyledView className="flex-1 justify-between items-center py-12 px-6">
    {/* Scanner Frame */}
    <StyledView className="flex-1 justify-center items-center">
      <StyledView
        className="relative"
        style={{
          width: frameSize,
          height: frameSize,
          backgroundColor: 'rgba(0, 200, 150, 0.05)',
          borderRadius: 12,
        }}
      >
        {/* Corner Brackets */}
        {/* Top Left */}
        <StyledView
          className="absolute top-0 left-0 border-l-2 border-t-2 border-primary"
          style={{ width: 32, height: 32 }}
        />
        {/* Top Right */}
        <StyledView
          className="absolute top-0 right-0 border-r-2 border-t-2 border-primary"
          style={{ width: 32, height: 32 }}
        />
        {/* Bottom Left */}
        <StyledView
          className="absolute bottom-0 left-0 border-l-2 border-b-2 border-primary"
          style={{ width: 32, height: 32 }}
        />
        {/* Bottom Right */}
        <StyledView
          className="absolute bottom-0 right-0 border-r-2 border-b-2 border-primary"
          style={{ width: 32, height: 32 }}
        />
      </StyledView>
    </StyledView>

    {/* Instruction Text */}
    <StyledText className="text-base text-light-gray text-center mb-16">
      Point camera at barcode
    </StyledText>

    {/* Bottom Controls */}
    <StyledView className="flex-row justify-between items-center w-full">
      {/* Torch Button */}
      <StyledTouchable
        activeOpacity={0.7}
        className={`w-12 h-12 rounded-full items-center justify-center ${
          isDark ? 'bg-gray-800' : 'bg-gray-200'
        }`}
      >
        <StyledText className="text-xl">💡</StyledText>
      </StyledTouchable>

      {/* Cancel Button */}
      <StyledTouchable
        onPress={onCancel}
        activeOpacity={0.85}
        className="px-6 py-3 rounded-full bg-gray-800"
      >
        <StyledText className="text-white font-semibold">Cancel</StyledText>
      </StyledTouchable>

      {/* Placeholder for alignment */}
      <StyledView className="w-12 h-12" />
    </StyledView>
  </StyledView>
);

// State 2: Product Found Component
const ProductFoundView = ({ isDark }) => (
  <StyledScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    className="flex-1"
    showsVerticalScrollIndicator={false}
  >
    <StyledView className="flex-1 justify-center items-center px-6 py-8">
      {/* Product Image Placeholder */}
      <StyledView
        className={`w-48 h-48 rounded-2xl items-center justify-center mb-8 ${
          isDark ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      >
        <StyledText className="text-5xl">📦</StyledText>
      </StyledView>

      {/* Product Info Card */}
      <StyledView
        className={`w-full p-6 rounded-2xl mb-8 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        {/* Product Name */}
        <StyledText className="text-2xl font-bold text-white mb-2">
          Amul Gold Full Cream Milk
        </StyledText>

        {/* Brand */}
        <StyledText className="text-base text-light-gray mb-3">
          Amul
        </StyledText>

        {/* Category Badge */}
        <StyledView
          className={`inline-flex w-fit px-3 py-1 rounded-full mb-4 ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          } border border-primary`}
        >
          <StyledText className="text-xs font-semibold text-primary">
            Dairy
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Price Input */}
      <StyledView className="w-full mb-6">
        <StyledText className="text-sm text-muted-gray mb-2">
          Enter Price
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
            placeholder="62"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            defaultValue="62"
            keyboardType="decimal-pad"
            className={`flex-1 text-lg ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          />
        </StyledView>
      </StyledView>

      {/* Add to Cart Button */}
      <StyledTouchable
        activeOpacity={0.85}
        className="w-full bg-primary py-4 rounded-xl items-center"
      >
        <StyledText className="text-white text-lg font-bold">
          Add to Cart
        </StyledText>
      </StyledTouchable>
    </StyledView>
  </StyledScrollView>
);

// State 3: Manual Entry Component
const ManualEntryView = ({ isDark }) => (
  <StyledScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    className="flex-1"
    showsVerticalScrollIndicator={false}
  >
    <StyledView className="px-6 py-8 pb-20">
      {/* Title */}
      <StyledText className="text-2xl font-bold text-white mb-6">
        Product not found — Add manually
      </StyledText>

      {/* Product Name Input */}
      <StyledView className="mb-6">
        <StyledText className="text-sm text-muted-gray mb-2">
          Product Name
        </StyledText>
        <StyledView
          className={`px-4 py-3 rounded-xl border ${
            isDark
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <StyledTextInput
            placeholder="e.g. Lay's Chips"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
          />
        </StyledView>
      </StyledView>

      {/* Brand Input */}
      <StyledView className="mb-6">
        <StyledText className="text-sm text-muted-gray mb-2">
          Brand (Optional)
        </StyledText>
        <StyledView
          className={`px-4 py-3 rounded-xl border ${
            isDark
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <StyledTextInput
            placeholder="e.g. PepsiCo"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}
          />
        </StyledView>
      </StyledView>

      {/* Category Picker */}
      <StyledView className="mb-6">
        <StyledText className="text-sm text-muted-gray mb-2">
          Category
        </StyledText>
        <StyledView
          className={`px-4 py-3 rounded-xl border ${
            isDark
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          <StyledView className="flex-row items-center justify-between">
            <StyledText className="text-lg text-light-gray">
              Snacks
            </StyledText>
            <StyledText className="text-lg text-primary">▼</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>

      {/* Price Input */}
      <StyledView className="mb-8">
        <StyledText className="text-sm text-muted-gray mb-2">
          Price
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
            placeholder="20"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            keyboardType="decimal-pad"
            className={`flex-1 text-lg ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          />
        </StyledView>
      </StyledView>

      {/* Add to Cart Button */}
      <StyledTouchable
        activeOpacity={0.85}
        className="w-full bg-primary py-4 rounded-xl items-center"
      >
        <StyledText className="text-white text-lg font-bold">
          Add to Cart
        </StyledText>
      </StyledTouchable>
    </StyledView>
  </StyledScrollView>
);

export default function ScannerScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [activeState, setActiveState] = useState('camera'); // 'camera', 'found', 'manual'

  return (
    <StyledView
      className={`flex-1 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
    >
      {/* Tab Navigation */}
      <StyledView
        className={`flex-row ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <TabButton
          label="Camera"
          isActive={activeState === 'camera'}
          onPress={() => setActiveState('camera')}
          isDark={isDark}
        />
        <TabButton
          label="Found"
          isActive={activeState === 'found'}
          onPress={() => setActiveState('found')}
          isDark={isDark}
        />
        <TabButton
          label="Manual"
          isActive={activeState === 'manual'}
          onPress={() => setActiveState('manual')}
          isDark={isDark}
        />
      </StyledView>

      {/* Content Area */}
      <StyledView className="flex-1">
        {activeState === 'camera' && (
          <CameraView
            isDark={isDark}
            onCancel={() => console.log('Cancel scan')}
          />
        )}
        {activeState === 'found' && <ProductFoundView isDark={isDark} />}
        {activeState === 'manual' && <ManualEntryView isDark={isDark} />}
      </StyledView>
    </StyledView>
  );
}
