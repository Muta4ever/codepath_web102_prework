# WEB102 Prework - *Seamonster Crowdfunding*

Submitted by: **Mutawakil Rabiu**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] List anything else that you can get done to improve the app functionality!

#### What I Added:
- **Real-time Search**: Live search that filters games as you type
- **Interactive Dropdown**: Search results appear in a clean dropdown below the search bar
- **Click-to-Filter**: Clicking on any search result instantly filters the games container to show only that specific game
- **Smart Matching**: Searches through both game names and descriptions for better results
- **Auto-hide Results**: Search dropdown automatically closes when a result is selected

#### How It Works:
1. User types in the search input field
2. Search filters through game names and descriptions in real-time
3. Matching results appear in a dropdown list with game name and description preview
4. Clicking a result:
   - Clears the search input
   - Hides the dropdown
   - Displays only the selected game in the main games container
5. Users can then use the "Show All Games" button to return to the full list

### 🎨 CSS Updates & Visual Enhancements

#### Search Interface Styling:
- **Modern Input Design**: 
  - Rounded corners with subtle shadow
  - Smooth focus animation that lifts the input
  - Color-changing border (gray → lightblue) on focus
  - Styled placeholder text with italic formatting

- **Enhanced Dropdown**:
  - Slide-down animation when results appear
  - Custom scrollbar with lightblue accent color
  - Professional shadow for depth
  - Rounded corners matching the overall design

- **Interactive Result Items**:
  - Game controller emoji (🎮) prefix for each result
  - Gradient background effect on hover
  - Smooth slide-in animation (translateX effect)
  - Left border accent appears on hover
  - Clear visual feedback for clickable items

#### Button Improvements:
- Gradient backgrounds for modern look
- Lift effect on hover (translateY animation)
- Enhanced shadows for depth
- Active state feedback when clicked
- Consistent styling across all buttons

#### Overall Design Polish:
- **Transitions**: Smooth animations throughout (0.2s - 0.3s)
- **Color Consistency**: Lightblue accent color used across search, buttons, and hover states
- **Typography**: Improved font weights and line heights for better readability
- **Shadows**: Layered shadows for professional depth effect
- **Responsive Feedback**: All interactive elements provide visual feedback

#### Game Cards Enhancement:
- Added smooth transform on hover (lifts up 5px)
- Enhanced transition effects for better user experience

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src="walk2.mp4" title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
Adding the search Functionality

## License


    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
