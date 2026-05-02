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

// Dummy data
const dashboardData = {
  userName: 'Subhadip',
  visitsThisMonth: 4,
  timeSpent: '3h 20m',
  spentThisMonth: '₹4,250',
  itemsScanned: 47,
  averageSpendPerMall: [
    { mall: 'D-Mart', amount: '₹1,100' },
  ],
  mostBoughtCategory: 'Snacks',
  reminder: 'Buy olive oil',
};

// Stat Card Component
const StatCard = ({ icon, value, label, isDark }) => (
  <StyledView
    className={`flex-1 p-4 rounded-2xl items-center ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
  >
    <StyledText className="text-3xl mb-3">{icon}</StyledText>
    <StyledText className="text-2xl font-bold text-white mb-1">
      {value}
    </StyledText>
    <StyledText className="text-xs text-muted-gray text-center">
      {label}
    </StyledText>
  </StyledView>
);

// Insight Item Component
const InsightItem = ({ label, value, isDark }) => (
  <StyledView
    className={`flex-row justify-between items-center py-3 px-4 rounded-xl mb-2 ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    }`}
  >
    <StyledText className="text-sm text-light-gray">{label}</StyledText>
    <StyledText className="text-sm font-semibold text-primary">
      {value}
    </StyledText>
  </StyledView>
);

// Category Badge Component
const CategoryBadge = ({ category, isDark }) => (
  <StyledView
    className={`inline-flex px-4 py-2 rounded-full mt-3 ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    } border border-primary`}
  >
    <StyledText className="text-sm font-semibold text-primary">
      {category}
    </StyledText>
  </StyledView>
);

// Reminder Card Component
const ReminderCard = ({ text, isDark }) => (
  <StyledView
    className={`flex-row justify-between items-center p-4 rounded-xl ${
      isDark ? 'bg-gray-800' : 'bg-gray-100'
    } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
  >
    <StyledView className="flex-1 flex-row items-center gap-3">
      <StyledText className="text-2xl">📝</StyledText>
      <StyledText className="flex-1 text-sm text-light-gray">
        {text}
      </StyledText>
    </StyledView>
    <StyledTouchable
      activeOpacity={0.7}
      className="ml-3"
    >
      <StyledText
        className="text-xs font-semibold text-primary px-3 py-1.5"
        style={{
          borderWidth: 1,
          borderColor: '#00c896',
          borderRadius: 6,
        }}
      >
        Done
      </StyledText>
    </StyledTouchable>
  </StyledView>
);

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <StyledView
      className={`flex-1 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
    >
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className={`${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <StyledView className="px-6 pt-8 pb-8">
          {/* Header Section */}
          <StyledView className="flex-row justify-between items-center mb-8">
            <StyledText
              className={`flex-1 text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Good morning, {dashboardData.userName} 👋
            </StyledText>
            {/* Profile Avatar */}
            <StyledView
              className={`w-12 h-12 rounded-full items-center justify-center ${
                isDark ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            >
              <StyledText className="text-lg font-bold text-white">
                {dashboardData.userName.charAt(0)}
              </StyledText>
            </StyledView>
          </StyledView>

          {/* Stats Grid */}
          <StyledView className="gap-4 mb-10">
            {/* Row 1 */}
            <StyledView className="flex-row gap-4">
              <StatCard
                icon="🏬"
                value={dashboardData.visitsThisMonth}
                label="Visits this month"
                isDark={isDark}
              />
              <StatCard
                icon="⏱️"
                value={dashboardData.timeSpent}
                label="Time Spent"
                isDark={isDark}
              />
            </StyledView>

            {/* Row 2 */}
            <StyledView className="flex-row gap-4">
              <StatCard
                icon="💳"
                value={dashboardData.spentThisMonth}
                label="Total Spent"
                isDark={isDark}
              />
              <StatCard
                icon="📦"
                value={dashboardData.itemsScanned}
                label="Items Scanned"
                isDark={isDark}
              />
            </StyledView>
          </StyledView>

          {/* Spending Insights Section */}
          <StyledView className="mb-10">
            <StyledText className="text-xl font-bold text-white mb-4">
              Spending Insights
            </StyledText>

            {/* Average Spend Per Mall */}
            {dashboardData.averageSpendPerMall.map((item, index) => (
              <InsightItem
                key={index}
                label={`Average at ${item.mall}`}
                value={item.amount}
                isDark={isDark}
              />
            ))}

            {/* Most Bought Category */}
            <StyledText className="text-sm text-muted-gray mt-4 mb-2">
              Most Bought Category
            </StyledText>
            <CategoryBadge
              category={dashboardData.mostBoughtCategory}
              isDark={isDark}
            />
          </StyledView>

          {/* Reminders Section */}
          <StyledView className="mb-20">
            <StyledText className="text-xl font-bold text-white mb-4">
              Reminders
            </StyledText>
            <ReminderCard text={dashboardData.reminder} isDark={isDark} />
          </StyledView>
        </StyledView>
      </StyledScrollView>

      {/* Check-In Button (Fixed at Bottom) */}
      <StyledView
        className={`px-6 py-4 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'} border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <StyledTouchable
          activeOpacity={0.85}
          className="bg-primary py-4 rounded-2xl flex-row items-center justify-center gap-3 shadow-lg"
        >
          <StyledText className="text-2xl">🛒</StyledText>
          <StyledText className="text-white text-lg font-bold">
            Check In to Mall
          </StyledText>
        </StyledTouchable>
      </StyledView>
    </StyledView>
  );
}
