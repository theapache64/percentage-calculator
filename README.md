# Percentage Calculator - Raycast Extension

A comprehensive percentage calculator for Raycast that supports multiple calculation types:

- **Basic Percentage**: Calculate X% of Y
- **What is X% of Y**: Interactive percentage calculation
- **X is what % of Y**: Find what percentage one number is of another
- **X is Y% of what**: Find the whole when you know the part and percentage
- **Percentage Difference**: Calculate the percentage difference between two values
- **Percentage Change**: Calculate percentage increase or decrease

## Features

- 🧮 Multiple calculation types in one extension
- 📋 Copy results to clipboard
- 📊 Clear calculation display
- ⚡ Fast and responsive interface
- 🎯 Accurate calculations with proper formatting

## Installation & Testing Guide

### Prerequisites

1. **Install Raycast**: Download from [raycast.com](https://raycast.com)
2. **Install Node.js**: Download from [nodejs.org](https://nodejs.org) (version 16 or higher)
3. **Install Raycast CLI**: Run in terminal:
   ```bash
   npm install -g @raycast/api
   ```

### Setup Instructions

1. **Create Project Directory**:
   ```bash
   mkdir percentage-calculator-raycast
   cd percentage-calculator-raycast
   ```

2. **Copy Files**: Create the following files in your project directory:
   - `package.json`
   - `tsconfig.json` 
   - `src/percentage-calculator.tsx`

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Create Icon** (Optional):
   - Add a `calculator.png` icon file (16x16 or 32x32 pixels) to the root directory
   - Or update the `icon` field in `package.json` to use a built-in Raycast icon

### Testing the Extension

1. **Development Mode**:
   ```bash
   npm run dev
   ```
   This starts the development server and automatically imports the extension into Raycast.

2. **Test in Raycast**:
   - Open Raycast (⌘ + Space)
   - Type "Percentage Calculator" or "perc"
   - Select the extension from the results
   - The calculator interface will open

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Import Built Extension**:
   - In Raycast, go to Extensions tab
   - Click "Import Extension"
   - Select the built extension file

### Usage Examples

1. **Basic Percentage (25% of 200)**:
   - Select "Basic: X% of Y = ?"
   - Enter 25 in "Percentage"
   - Enter 200 in "Base Value"
   - Press ⌘ + Enter to calculate
   - Result: 50

2. **What Percentage (50 is what % of 200)**:
   - Select "X is what % of Y?"
   - Enter 50 in "Value 1"
   - Enter 200 in "Value 2"
   - Result: 25%

3. **Percentage Difference (between 100 and 150)**:
   - Select "Percentage Difference"
   - Enter 100 in "Value 1"
   - Enter 150 in "Value 2"
   - Result: 40% difference

4. **Percentage Change (from 100 to 150)**:
   - Select "Percentage Change"
   - Enter 100 in "Value 1" (old value)
   - Enter 150 in "Value 2" (new value)
   - Result: 50% increase

### Troubleshooting

**Extension not appearing in Raycast:**
- Make sure you're in development mode: `npm run dev`
- Check terminal for any error messages
- Verify all dependencies are installed

**Calculation errors:**
- Ensure you're entering valid numbers
- Check that you're using the correct fields for your calculation type
- Some calculations require specific combinations of fields

**Build errors:**
- Run `npm run lint` to check for code issues
- Ensure TypeScript is properly configured
- Check that all imports are correct

### Keyboard Shortcuts

- **⌘ + Enter**: Calculate
- **⌘ + C**: Copy result (when available)
- **⌘ + Shift + C**: Copy full calculation (when available)

### Customization

You can modify the extension by:
- Adding new calculation types in the dropdown
- Changing the styling and layout
- Adding more precision to decimal places
- Including additional mathematical operations

## Development Notes

- The extension uses React with TypeScript
- Built with Raycast API v1.48.9
- Follows Raycast's design guidelines
- Includes proper error handling and user feedback