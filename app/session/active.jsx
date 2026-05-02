import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  FlatList,
} from 'react-native';
import { styled } from 'nativewind';
import '../../nativewind/index.css';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledFlatList = styled(FlatList);

// Dummy session data
const sessionData = {
  mall: 'D-Mart',
  budget: 1000,
  spent: 650,
  timeLimit: '30 minutes',
  timeRemaining: '18:42',
  cartItems: [
    {
      id: 1,
      name: 'Amul Butter',
      category: 'Dairy',
      price: 55,
    },
    {
      id: 2,
      name: "Lay's Chips",
      category: 'Snacks',
      price: 20,
    },
    {
      id: 3,
      name: 'Dove Soap',
      category: 'Personal Care',
      price: 89,
    },
    {
      id: 4,
      name: 'Tata Salt',
      category: 'Staples',
      price: 24,
    },
  ],
};

// Calculate totals
const cartTotal = sessionData.cartItems.reduce((sum, item) => sum + item.price, 0);
const percentageSpent = Math.round((sessionData.spent / sessionData.budget) * 100);

// Cart Item Component
const CartItem = ({ item, isDark, onDelete }) => (
  <StyledView
    className={`flex-row items-center justify-between py-4 px-4 rounded-xl mb-2 ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    }`}
  >
    <StyledView className="flex-1">
      <StyledText className="text-sm font-bold text-white mb-1">
        {item.name}
      </StyledText>
      <StyledView
        className={`inline-flex w-fit px-2 py-1 rounded-full ${
          isDark ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <StyledText className="text-xs text-primary font-semibold">
          {item.category}
        </StyledText>
      </StyledView>
    </StyledView>
    <StyledView className="flex-row items-center gap-4">
      <StyledText className="text-sm font-bold text-white min-w-10 text-right">
        ₹{item.price}
      </StyledText>
      <StyledTouchable
        onPress={() => onDelete(item.id)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <StyledText className="text-lg font-bold text-gray-500">
          ✕
        </StyledText>
      </StyledTouchable>
    </StyledView>
  </StyledView>
);

export default function ActiveSessionScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [cartItems, setCartItems] = useState(sessionData.cartItems);

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleScanProduct = () => {
    // Scan logic would go here
    console.log('Scan product');
  };

  const handleCheckout = () => {
    // Checkout logic would go here
    console.log('Checkout');
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
        <StyledView className="px-6 pt-6 pb-4">
          <StyledView className="flex-row justify-between items-center mb-6">
            <StyledText className="text-3xl font-bold text-white">
              {sessionData.mall}
            </StyledText>
            <StyledText className="text-2xl font-bold text-primary">
              {sessionData.timeRemaining}
            </StyledText>
          </StyledView>

          {/* Budget Bar Section */}
          <StyledView className="mb-6">
            {/* Budget Text Row */}
            <StyledView className="flex-row justify-between items-center mb-3">
              <StyledText
                className={`text-sm font-semibold ${
                  isDark ? 'text-light-gray' : 'text-muted-gray'
                }`}
              >
                ₹{sessionData.spent} / ₹{sessionData.budget}
              </StyledText>
              <StyledText className="text-sm font-bold text-primary">
                {percentageSpent}%
              </StyledText>
            </StyledView>

            {/* Budget Bar */}
            <StyledView
              className={`w-full h-3 rounded-full overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            >
              <StyledView
                style={{
                  width: `${percentageSpent}%`,
                }}
                className="h-full bg-primary rounded-full"
              />
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Timer Section */}
        <StyledView className="items-center py-6 px-6">
          <StyledText className="text-6xl font-bold text-white mb-2">
            {sessionData.timeRemaining}
          </StyledText>
          <StyledText className="text-base text-muted-gray">
            Time Remaining
          </StyledText>
        </StyledView>

        {/* Cart Section */}
        <StyledView className="flex-1 px-6 pt-4">
          <StyledText className="text-xl font-bold text-white mb-4">
            Your Cart ({cartItems.length} items)
          </StyledText>

          {/* Cart Items */}
          <StyledView className="mb-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                isDark={isDark}
                onDelete={handleDeleteItem}
              />
            ))}
          </StyledView>

          {/* Divider */}
          <StyledView
            className={`h-px my-4 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
          />

          {/* Cart Total */}
          <StyledView className="flex-row justify-end mb-8">
            <StyledView className="flex-row items-baseline gap-2">
              <StyledText className="text-sm text-muted-gray">Total:</StyledText>
              <StyledText className="text-2xl font-bold text-white">
                ₹{cartTotal}
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScrollView>

      {/* Footer Buttons */}
      <StyledView
        className={`px-6 py-4 flex-row gap-3 ${
          isDark ? 'bg-dark-navy' : 'bg-gray-50'
        } border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
      >
        {/* Scan Product Button - Outlined */}
        <StyledTouchable
          onPress={handleScanProduct}
          activeOpacity={0.85}
          className="flex-1 py-4 rounded-xl items-center justify-center border-2 border-primary"
        >
          <StyledView className="flex-row items-center justify-center gap-2">
            <StyledText className="text-lg">📷</StyledText>
            <StyledText className="text-primary font-bold text-base">
              Scan
            </StyledText>
          </StyledView>
        </StyledTouchable>

        {/* Checkout Button - Filled */}
        <StyledTouchable
          onPress={handleCheckout}
          activeOpacity={0.85}
          className="flex-1 py-4 rounded-xl items-center justify-center bg-primary"
        >
          <StyledView className="flex-row items-center justify-center gap-2">
            <StyledText className="text-lg">🛍️</StyledText>
            <StyledText className="text-white font-bold text-base">
              Checkout
            </StyledText>
          </StyledView>
        </StyledTouchable>
      </StyledView>
    </StyledView>
  );
}
