//  Handling CLI arguments and System Time without external libraries

// ANSI Color Codes for Terminal
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
};

// Get arguments (skipping first two node paths)
const args = process.argv.slice(2);
const name = args[0] || "Guest";

// Get Hour
const hour = new Date().getHours();
let greeting = "Good Morning";
if (hour >= 12 && hour < 18) greeting = "Good Afternoon";
else if (hour >= 18) greeting = "Good Evening";

// Print Styled Output
console.log(`
 ${colors.green}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                                                                      %
%   ${colors.bright}SYSTEM INITIALIZED${colors.green}                                                 %
%                                                                      %
%   ${greeting}, ${name.toUpperCase()}!                                               %
%                                                                      %
%   > Hello, Node.js!                                                  %
%                                                                      %
%   ${colors.yellow}[INFO]${colors.green} Runtime Version: ${process.version}                                    % 
%   ${colors.yellow}[INFO]${colors.green} Platform: ${process.platform}                                             %
%                                                                      %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%${colors.reset}
`);