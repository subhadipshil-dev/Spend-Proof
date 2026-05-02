import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  ScrollView,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { styled } from 'nativewind';
import '../nativewind/index.css';

const { width, height } = Dimensions.get('window');

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);

// Onboarding slides data
const slides = [
  {
    id: 1,
    icon: '🛒',
    title: 'Welcome to SpendProof',
    subtitle: 'Your smart shopping guard\ninside every mall',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Beat the Time Trap',
    subtitle:
      "Always know how long you've\nbeen inside. Don't let the mall trick you.",
  },
  {
    id: 3,
    icon: '💳',
    title: 'Stay Within Budget',
    subtitle:
      'Scan products and watch your\nbudget bar fill live as you shop.',
  },
];

export default function OnboardingScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const pagerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePageSelected = (e) => {
    setCurrentSlide(e.nativeEvent.position);
  };

  const handleSkip = () => {
    // Navigation logic would go here
    console.log('Skip onboarding');
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      pagerRef.current?.setPage(currentSlide + 1);
    } else {
      // Get Started - navigation logic would go here
      console.log('Get Started');
    }
  };

  return (
    <StyledView
      className={`flex-1 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
    >
      {/* Skip Button */}
      <StyledTouchable
        onPress={handleSkip}
        className="absolute top-12 right-6 z-10"
        activeOpacity={0.7}
      >
        <StyledText
          className={`text-base font-semibold ${
            isDark ? 'text-muted-gray' : 'text-muted-gray'
          }`}
        >
          Skip
        </StyledText>
      </StyledTouchable>

      {/* Pager View for Slides */}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={handlePageSelected}
      >
        {slides.map((slide) => (
          <StyledView
            key={slide.id}
            className={`flex-1 justify-center items-center px-8 ${
              isDark ? 'bg-dark-navy' : 'bg-gray-50'
            }`}
          >
            {/* Icon/Emoji */}
            <StyledText className="text-9xl mb-12">
              {slide.icon}
            </StyledText>

            {/* Title */}
            <StyledText
              className={`text-4xl font-bold text-center mb-6 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {slide.title}
            </StyledText>

            {/* Subtitle */}
            <StyledText
              className={`text-lg text-center leading-relaxed ${
                isDark ? 'text-light-gray' : 'text-muted-gray'
              }`}
            >
              {slide.subtitle}
            </StyledText>
          </StyledView>
        ))}
      </PagerView>

      {/* Bottom Section with Indicators and Buttons */}
      <StyledView
        className={`pb-12 px-6 ${isDark ? 'bg-dark-navy' : 'bg-gray-50'}`}
      >
        {/* Dot Indicators */}
        <StyledView className="flex-row justify-center items-center gap-2 mb-8">
          {slides.map((_, index) => (
            <StyledView
              key={index}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary w-3 h-3'
                  : isDark
                    ? 'bg-gray-600 w-2 h-2'
                    : 'bg-gray-300 w-2 h-2'
              }`}
            />
          ))}
        </StyledView>

        {/* Action Buttons */}
        <StyledView className="flex-row justify-between items-center">
          {/* Empty space for alignment */}
          <StyledView className="w-12" />

          {/* Next/Get Started Button */}
          <StyledTouchable
            onPress={handleNext}
            activeOpacity={0.85}
            className="bg-primary py-4 px-12 rounded-full shadow-lg"
          >
            <StyledText className="text-white text-lg font-bold text-center">
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </StyledText>
          </StyledTouchable>

          {/* Placeholder for alignment */}
          <StyledView className="w-12" />
        </StyledView>

        {/* Slide Counter */}
        <StyledText
          className={`text-center mt-6 text-sm ${
            isDark ? 'text-muted-gray' : 'text-muted-gray'
          }`}
        >
          {currentSlide + 1} / {slides.length}
        </StyledText>
      </StyledView>
    </StyledView>
  );
}
