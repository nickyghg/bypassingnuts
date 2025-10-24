// Theme system
const themes = {
    purple: {
        name: "purple",
        colors: {
            primary: "#6366f1",
            secondary: "#8b5cf6", 
            tertiary: "#06b6d4",
            accent: "#6366f1",
            text: "#e8e8e8",
            background: "#0a0a0f",
            surface: "#1a1a2e"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #6366f1 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #8b5cf6 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #06b6d4 0%, transparent 80%)"
        ]
    },
    red: {
        name: "red",
        colors: {
            primary: "#ef4444",
            secondary: "#f97316",
            tertiary: "#dc2626",
            accent: "#ef4444",
            text: "#e8e8e8",
            background: "#0f0a0a",
            surface: "#2e1a1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #ef4444 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #f97316 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #dc2626 0%, transparent 80%)"
        ]
    },
    green: {
        name: "green",
        colors: {
            primary: "#22c55e",
            secondary: "#10b981",
            tertiary: "#059669",
            accent: "#22c55e",
            text: "#e8e8e8",
            background: "#0a0f0a",
            surface: "#1a2e1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #22c55e 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #10b981 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #059669 0%, transparent 80%)"
        ]
    },
    yellow: {
        name: "yellow",
        colors: {
            primary: "#eab308",
            secondary: "#f59e0b",
            tertiary: "#d97706",
            accent: "#eab308",
            text: "#e8e8e8",
            background: "#0f0f0a",
            surface: "#2e2e1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #eab308 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #f59e0b 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #d97706 0%, transparent 80%)"
        ]
    },
    neon: {
        name: "neon",
        colors: {
            primary: "#00ff88",
            secondary: "#ff0088",
            tertiary: "#8800ff",
            accent: "#00ff88",
            text: "#e8e8e8",
            background: "#0a0a0a",
            surface: "#1a1a1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #00ff88 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #ff0088 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #8800ff 0%, transparent 80%)"
        ]
    },
    ocean: {
        name: "ocean",
        colors: {
            primary: "#0891b2",
            secondary: "#0ea5e9",
            tertiary: "#0284c7",
            accent: "#0891b2",
            text: "#e8e8e8",
            background: "#0a0f0f",
            surface: "#1a2e2e"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #0891b2 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #0ea5e9 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #0284c7 0%, transparent 80%)"
        ]
    },
    // New color variations
    forest: {
        name: "forest",
        colors: {
            primary: "#16a34a",
            secondary: "#22c55e",
            tertiary: "#15803d",
            accent: "#16a34a",
            text: "#e8e8e8",
            background: "#0a0f0a",
            surface: "#1a2e1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #16a34a 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #22c55e 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #15803d 0%, transparent 80%)"
        ]
    },
    sunset: {
        name: "sunset",
        colors: {
            primary: "#f97316",
            secondary: "#fb923c",
            tertiary: "#ea580c",
            accent: "#f97316",
            text: "#e8e8e8",
            background: "#0f0a0a",
            surface: "#2e1a1a"
        },
        gradients: [
            "radial-gradient(ellipse 40% 30% at var(--x1,20%) var(--y1,30%), #f97316 0%, transparent 80%)",
            "radial-gradient(ellipse 35% 25% at var(--x2,80%) var(--y2,70%), #fb923c 0%, transparent 80%)",
            "radial-gradient(ellipse 50% 40% at var(--x3,60%) var(--y3,50%), #ea580c 0%, transparent 80%)"
        ]
    },
    // New animation styles
    matrix: {
        name: "matrix",
        colors: {
            primary: "#00ff41",
            secondary: "#00cc33",
            tertiary: "#00ff88",
            accent: "#00ff41",
            text: "#e8e8e8",
            background: "#000000",
            surface: "#0a0a0a"
        },
        gradients: [
            "linear-gradient(45deg, transparent 30%, #00ff41 50%, transparent 70%)",
            "linear-gradient(-45deg, transparent 30%, #00cc33 50%, transparent 70%)",
            "linear-gradient(90deg, transparent 30%, #00ff88 50%, transparent 70%)"
        ]
    },
    aurora: {
        name: "aurora",
        colors: {
            primary: "#8b5cf6",
            secondary: "#06b6d4",
            tertiary: "#10b981",
            accent: "#8b5cf6",
            text: "#e8e8e8",
            background: "#0a0a0f",
            surface: "#1a1a2e"
        },
        gradients: [
            "conic-gradient(from 0deg at 20% 30%, #8b5cf6, transparent, #06b6d4, transparent, #10b981)",
            "conic-gradient(from 120deg at 80% 70%, #06b6d4, transparent, #10b981, transparent, #8b5cf6)",
            "conic-gradient(from 240deg at 60% 50%, #10b981, transparent, #8b5cf6, transparent, #06b6d4)"
        ]
    },
    fire: {
        name: "fire",
        colors: {
            primary: "#dc2626",
            secondary: "#f97316",
            tertiary: "#fbbf24",
            accent: "#dc2626",
            text: "#e8e8e8",
            background: "#0f0a0a",
            surface: "#2e1a1a"
        },
        gradients: [
            "radial-gradient(ellipse 60% 40% at var(--x1,20%) var(--y1,30%), #dc2626 0%, #f97316 30%, transparent 70%)",
            "radial-gradient(ellipse 50% 35% at var(--x2,80%) var(--y2,70%), #f97316 0%, #fbbf24 25%, transparent 65%)",
            "radial-gradient(ellipse 70% 45% at var(--x3,60%) var(--y3,50%), #fbbf24 0%, #dc2626 20%, transparent 60%)"
        ]
    },
    cosmic: {
        name: "cosmic",
        colors: {
            primary: "#6366f1",
            secondary: "#8b5cf6",
            tertiary: "#ec4899",
            accent: "#6366f1",
            text: "#e8e8e8",
            background: "#0a0a0f",
            surface: "#1a1a2e"
        },
        gradients: [
            "radial-gradient(circle at var(--x1,20%) var(--y1,30%), #6366f1 0%, transparent 50%), radial-gradient(circle at var(--x2,80%) var(--y2,70%), #8b5cf6 0%, transparent 50%), radial-gradient(circle at var(--x3,60%) var(--y3,50%), #ec4899 0%, transparent 50%)"
        ]
    }
};

let currentTheme = 'purple';

// Theme switching functionality
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    currentTheme = themeName;
    
    // Apply CSS custom properties
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
    document.documentElement.style.setProperty('--tertiary-color', theme.colors.tertiary);
    document.documentElement.style.setProperty('--accent-color', theme.colors.accent);
    document.documentElement.style.setProperty('--text-color', theme.colors.text);
    document.documentElement.style.setProperty('--background-color', theme.colors.background);
    document.documentElement.style.setProperty('--surface-color', theme.colors.surface);
    
    // Update background gradients
    const backgroundElement = document.querySelector('body::before');
    if (backgroundElement) {
        backgroundElement.style.background = theme.gradients.join(', ') + ', linear-gradient(120deg, ' + theme.colors.background + ' 0%, ' + theme.colors.surface + ' 100%)';
    }
    
    // Update video colors
    videos.forEach(video => {
        video.colors.accent = theme.colors.accent;
        video.colors.text = theme.colors.text;
    });
    
    // Save theme preference
    localStorage.setItem('bypassingnuts-theme', themeName);
    
    // Update theme button
    updateThemeButton();
}

function updateThemeButton() {
    const themeIcon = document.getElementById('themeIcon');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    if (themeIcon) {
        // Update icon color based on theme
        themeIcon.style.borderColor = `var(--accent-color)`;
    }
    
    // Update active state for theme options
    themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        }
    });
}

function toggleThemeMenu() {
    const themeMenu = document.getElementById('themeMenu');
    if (themeMenu) {
        themeMenu.classList.toggle('show');
    }
}

function cycleTheme() {
    const themeNames = Object.keys(themes);
    const currentIndex = themeNames.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    applyTheme(themeNames[nextIndex]);
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('bypassingnuts-theme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    } else {
        applyTheme('purple');
    }
}

// Video data structure for BypassingNuts channel archive
const videos = [
    {
        id: 1,
        name: "flying on blocksmc with liquidbounce",
        uploaded: "2/15/2025",
        duration: "2:53",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/FLYING%20on%20BlocksMC%20with%20Liquidbounce.png",
        videoUrl: "https://jumpshare.com/embed/ybnsQQC3pBnfysbqInBD",
        description: "flying on blocksmc with liquidbounce",
        tags: ["blocksmc", "liquidbounce", "flying"],
        colors: {
            text: "#ffffff",
            accent: "#ff0000",
            header: "#0e8a00"
        }
    },
    {
        id: 2,
        name: "blocksmc autoblock and sprint scaffold",
        uploaded: "2/10/2025",
        duration: "3:22",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/BLOCKSMC%20AUTOBLOCK%20AND%20SPRINT%20SCAFFOLD.png",
        videoUrl: "https://jumpshare.com/embed/XslIDjb5j9Fxc1XlYNEq",
        description: "blocksmc autoblock and sprint scaffold",
        tags: ["blocksmc", "autoblock", "scaffold"],
        colors: {
            text: "#ffffff",
            accent: "#7700ff",
            header: "#0e8a00"
        }
    },
    {
        id: 3,
        name: "destroying verus ft. exire",
        uploaded: "2/5/2025",
        duration: "1:51",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/Destroying%20Verus%20ft.%20Exire.png",
        videoUrl: "https://jumpshare.com/embed/hbq47OSNc252M05yAeed",
        description: "destroying verus ft. exire",
        tags: ["verus", "exire", "anticheat"],
        colors: {
            text: "#ffffff",
            accent: "#ffe600",
            header: "#0e8a00"
        }
    },
    {
        id: 4,
        name: "rise 6 high end blocksmc gaming",
        uploaded: "1/28/2025",
        duration: "2:16",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/rise%206%20high%20end%20blocksmc%20gaming.png",
        videoUrl: "https://jumpshare.com/embed/VJ0hyuiEig5eCLDPG29I",
        description: "rise 6 high end blocksmc gaming",
        tags: ["rise", "blocksmc", "gaming"],
        colors: {
            text: "#ffffff",
            accent: "#00ffd9",
            header: "#0e8a00"
        }
    },
    {
        id: 5,
        name: "the best hvh server is back! - norules",
        uploaded: "1/20/2025",
        duration: "3:56",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/The%20best%20HvH%20server%20is%20BACK!%20-%20NoRules.png",
        videoUrl: "https://jumpshare.com/embed/Xc7ba5rNpQPlz1jsXJAx",
        description: "the best hvh server is back! - norules",
        tags: ["hvh", "norrules", "server"],
        colors: {
            text: "#ffffff",
            accent: "#00ff04",
            header: "#0e8a00"
        }
    },
    {
        id: 6,
        name: "epic universocraft gaming ft. liquidbounce",
        uploaded: "1/15/2025",
        duration: "2:03",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/epic%20universocraft%20gaming%20ft.%20liquidbounce.png",
        videoUrl: "https://jumpshare.com/embed/RwYkD6am2XL5WWdognC0",
        description: "epic universocraft gaming ft. liquidbounce",
        tags: ["universocraft", "liquidbounce", "gaming"],
        colors: {
            text: "#ffffff",
            accent: "#91ff00",
            header: "#0e8a00"
        }
    },
    {
        id: 7,
        name: "server crashing exploit - liquidbounce",
        uploaded: "1/10/2025",
        duration: "1:29",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/SERVER%20CRASHING%20EXPLOIT%20-%20LIQUIDBOUNCE.png",
        videoUrl: "https://jumpshare.com/embed/oijWVjdIoHbTvoQK2oZ9",
        description: "server crashing exploit - liquidbounce",
        tags: ["exploit", "liquidbounce", "crash"],
        colors: {
            text: "#ffffff",
            accent: "#ff0000",
            header: "#0e8a00"
        }
    },
    {
        id: 8,
        name: "bypassingnuts - 2023",
        uploaded: "1/5/2025",
        duration: "4:44",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/bypassingnuts%20-%202023.png",
        videoUrl: "https://jumpshare.com/embed/Dix195UfNqX4bmWlWXOA",
        description: "bypassingnuts - 2023",
        tags: ["bypassingnuts", "2023", "compilation"],
        colors: {
            text: "#ffffff",
            accent: "#ffe600",
            header: "#0e8a00"
        }
    },
    {
        id: 9,
        name: "sentinel cannot be fixed",
        uploaded: "12/28/2024",
        duration: "1:01",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/Sentinel%20CANNOT%20be%20fixed.png",
        videoUrl: "https://jumpshare.com/embed/4HUcLCsMv6opoKio1AAN",
        description: "sentinel cannot be fixed",
        tags: ["sentinel", "anticheat", "bypass"],
        colors: {
            text: "#ffffff",
            accent: "#00ff04",
            header: "#0e8a00"
        }
    },
    {
        id: 10,
        name: "craftplay disabled their anticheat?!",
        uploaded: "12/20/2024",
        duration: "3:07",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/Craftplay%20DISABLED%20THEIR%20ANTICHEAT!.png",
        videoUrl: "https://jumpshare.com/embed/vN8OwPZGdVygHo8MCvZs",
        description: "craftplay disabled their anticheat?!",
        tags: ["craftplay", "anticheat", "disabled"],
        colors: {
            text: "#ffffff",
            accent: "#ff0000",
            header: "#0e8a00"
        }
    },
    {
        id: 11,
        name: "hacking on blockdrop with azura 5.0 beta?!? - broken vid",
        uploaded: "12/15/2024",
        duration: "3:23",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/Hacking%20on%20BlockDrop%20with%20Azura%205.0%20Beta!%20-%20broken%20vid.png",
        videoUrl: "https://jumpshare.com/embed/jkfv7CWtBAWtlpX4bGDw",
        description: "hacking on blockdrop with azura 5.0 beta?!? - broken vid",
        tags: ["blockdrop", "azura", "beta"],
        colors: {
            text: "#ffffff",
            accent: "#91ff00",
            header: "#0e8a00"
        }
    },
    {
        id: 12,
        name: "no anticheat server in 2024 wtf!?",
        uploaded: "12/10/2024",
        duration: "1:02",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/NO%20ANTICHEAT%20SERVER%20IN%202024%20WTF!.png",
        videoUrl: "https://jumpshare.com/embed/hrxWOQIwTub0r6V0Z34M",
        description: "no anticheat server in 2024 wtf!?",
        tags: ["no", "anticheat", "2024"],
        colors: {
            text: "#ffffff",
            accent: "#ffe600",
            header: "#0e8a00"
        }
    },
    {
        id: 13,
        name: "rolling the paper on skycave - azura 5.0",
        uploaded: "12/5/2024",
        duration: "3:32",
        thumbnail: "https://raw.githubusercontent.com/nickyghg/bypassingnuts/main/resources/thumbnails/Rolling%20the%20paper%20on%20SkyCave%20-%20Azura%205.0.png",
        videoUrl: "https://jumpshare.com/embed/TpKMP5eWJnGM6okA4gRQ",
        description: "rolling the paper on skycave - azura 5.0",
        tags: ["skycave", "azura", "paper"],
        colors: {
            text: "#ffffff",
            accent: "#7700ff",
            header: "#0e8a00"
        }
    }
];

const searchFields = ["name", "tags"];
let hideOutdated = true;
let currentField = null;
let searchCriteria = {};

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    populateVideos();
    setupSearchBar();
    
    // Close theme menu when clicking outside
    document.addEventListener('click', (event) => {
        const themeSelector = document.querySelector('.theme-selector');
        const themeMenu = document.getElementById('themeMenu');
        
        if (themeSelector && themeMenu && !themeSelector.contains(event.target)) {
            themeMenu.classList.remove('show');
        }
    });
});

// Setup the search bar with event listeners
function setupSearchBar() {
    const searchBar = document.getElementById("searchBar");
    if (searchBar) {
        searchBar.addEventListener("keydown", handleKeyDown);
        searchBar.addEventListener("input", handleInput);
        document.addEventListener("keydown", handleGlobalKeyDown);
    }
}

// Handle input for text changes in the search bar
function handleInput(event) {
    const searchBar = event.target;
    const input = searchBar.value.trim();

    // If the user is typing inside a field (e.g., "name:"), update the current value for that field
    if (currentField && !input.endsWith(">")) {
        searchCriteria[currentField] = input;
    }

    populateVideos();
}

// Handle key down events for special cases like space, arrow keys, and escape
function handleKeyDown(event) {
    const searchBar = event.target;
    const input = searchBar.value.trim();

    // Check if the input matches a command followed by a space (e.g., "name:")
    if (event.key === " " && input.includes(":") && searchFields.some(field => input.startsWith(field + ":"))) {
        currentField = input.split(":")[0];
        searchCriteria[currentField] = ""; // Start capturing input for this field
        displayActiveSearchCommand(searchBar, currentField);
        event.preventDefault(); // Prevent default space behavior
    }

    // If the right arrow key is pressed, treat it as ending the current field's input
    if (event.key === "ArrowRight" && currentField) {
        currentField = null; // Finish the input for the current field
        searchBar.value += " "; // Add a space after the right arrow press for clarity
        event.preventDefault();
    }
}

// Handle global key down events
function handleGlobalKeyDown(event) {
    if (event.key === "Escape") {
        // Clear the entire search criteria and reset the input field
        currentField = null;
        searchCriteria = {};
        const searchBar = document.getElementById("searchBar");
        if (searchBar) {
            searchBar.value = "";
        }
        clearActiveSearchCommands();
    }
}

// Display active search commands in a styled format within the input area
function displayActiveSearchCommand(searchBar, field) {
    // Show the active command with a styled look like a Discord command
    const commandDisplay = document.createElement("span");
    commandDisplay.className = "active-command";
    commandDisplay.textContent = `${field}:`;
    commandDisplay.setAttribute("data-field", field);

    // Insert the command display before the input field
    searchBar.insertAdjacentElement("beforebegin", commandDisplay);

    // Clear the input value
    searchBar.value = "";
}

// Clear all displayed active search commands
function clearActiveSearchCommands() {
    const commands = document.querySelectorAll(".active-command");
    commands.forEach(command => command.remove());
    populateVideos(); // Refresh the displayed videos
}

// Updated populateVideos function to handle null videoList
function populateVideos() {
    const videoList = document.getElementById("videoList");
    
    // If videoList is not found, exit the function
    if (!videoList) {
        return;
    }
    
    videoList.innerHTML = '';

    videos.forEach(video => {
        if (hideOutdated && video.tags.includes("outdated")) {
            return;
        }

        if (matchesSearchCriteria(video, searchCriteria)) {
            const videoDiv = document.createElement('div');
            videoDiv.className = 'video';
            videoDiv.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.name}">
                    <div class="video-duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <h2>${video.name}</h2>
                    <p>duration: ${video.duration}</p>
                    <a href="video.html?id=${video.id}">watch video</a>
                </div>
            `;
            videoList.appendChild(videoDiv);
        }
    });
}

// Check if a video matches the current search criteria
function matchesSearchCriteria(video, criteria) {
    for (const field in criteria) {
        const value = criteria[field].toLowerCase();
        if (!value) continue;

        if (field === "tags") {
            if (!video.tags.some(tag => tag.toLowerCase().includes(value))) {
                return false;
            }
        } else if (!video[field].toLowerCase().includes(value)) {
            return false;
        }
    }
    return true;
}

// Toggle outdated videos visibility
function toggleOutdatedVideos() {
    hideOutdated = !hideOutdated;
    const toggleButton = document.getElementById('toggleOutdated');
    if (toggleButton) {
        toggleButton.textContent = hideOutdated ? "Hide Outdated" : "Show Outdated";
    }
    populateVideos();
}

// Animate background (same as configs)
(function animateEtherBackground() {
    const lerp = (a, b, t) => a + (b - a) * t;
    const blobs = [
        { x: 20, y: 30, tx: 40, ty: 60, speed: 0.18, phase: 0 },
        { x: 80, y: 70, tx: 60, ty: 40, speed: 0.14, phase: Math.PI / 2 },
        { x: 60, y: 50, tx: 70, ty: 80, speed: 0.11, phase: Math.PI }
    ];
    function animate(time) {
        blobs.forEach((blob, i) => {
            const t = (Math.sin(time * blob.speed / 1000 + blob.phase) + 1) / 2;
            const x = lerp(blob.x, blob.tx, t);
            const y = lerp(blob.y, blob.ty, t);
            document.body.style.setProperty(`--x${i+1}`, `${x}%`);
            document.body.style.setProperty(`--y${i+1}`, `${y}%`);
        });
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
})();
