// ==============================================================================
// WALLSTREET ARENA 2026 - EVENT CONFIGURATION
// Easily configure event links, contact details, dates, and prizes here.
// ==============================================================================

export const EVENT_CONFIG = {
  // Main registration links
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfn5asK1JAOeCerk5sxPayzqZJijlFJLSKYy9-q9JyzMG2P1A/viewform",
  registrationUrls: {
    pccoe: "https://docs.google.com/forms/d/e/1FAIpQLSfn5asK1JAOeCerk5sxPayzqZJijlFJLSKYy9-q9JyzMG2P1A/viewform",
    external: "https://unstop.com/o/b41fX3k?utm_medium=Share&utm_source=satyashi67671&utm_campaign=Competitions"
  },
  
  // Event Branding
  name: "WALLSTREET ARENA",
  tagline: "Where Strategy Meets the Market.",
  supportingText: "Think smart. Analyze fast. Conquer the arena.",
  
  // Date & Venue
  date: "10 OCTOBER 2026",
  venue: "PCCOE",
  fullVenue: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
  mapsUrl: "https://maps.google.com/?q=Pimpri+Chinchwad+College+of+Engineering+Pune",
  
  // Organizer
  organizer: "ACM-W PCCOE",
  organizerFullName: "ACM-W Student Chapter, PCCOE Pune",
  collegeName: "Pimpri Chinchwad College of Engineering",
  
  // Prize Pool
  prizePool: "₹10K+",
  prizeAmount: 10000,
  
  // Student Coordinators
  coordinators: [
    {
      name: "SANCHITA SAKHARE",
      phone: "9822799225",
      phoneRaw: "+919822799225",
      role: "Lead Event Coordinator",
      email: "sanchita.sakhare@pccoepune.org"
    },
    {
      name: "SHIVANI VIBHUTE",
      phone: "9226853657",
      phoneRaw: "+919226853657",
      role: "Event Co-Coordinator",
      avatar: "/shivani.png",
      email: "shivani.vibhute@pccoepune.org"
    }
  ],
  
  // Navigation Links
  navLinks: [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "PRIZES", href: "#prizes" },
    { name: "CONTACT", href: "#contact" }
  ],
  
  // Live ticker data for Bloomberg-style atmospheric ticker tape
  tickerItems: [
    { symbol: "WSA/INDEX", price: "10,240.50", change: "+14.8%", up: true },
    { symbol: "NIFTY 50", price: "25,810.20", change: "+1.24%", up: true },
    { symbol: "S&P 500", price: "5,864.67", change: "+0.85%", up: true },
    { symbol: "NASDAQ", price: "18,489.55", change: "+1.12%", up: true },
    { symbol: "GOLD/OZ", price: "$2,658.40", change: "+0.45%", up: true },
    { symbol: "BTC/USD", price: "$68,450.00", change: "+3.28%", up: true },
    { symbol: "NVDA", price: "$138.25", change: "+2.94%", up: true },
    { symbol: "ARENA/BULL", price: "99.98", change: "+18.4%", up: true },
    { symbol: "CRUDE/OIL", price: "$74.15", change: "-0.62%", up: false },
    { symbol: "ETH/USD", price: "$2,640.10", change: "+1.75%", up: true },
    { symbol: "TSLA", price: "$220.70", change: "-1.15%", up: false },
    { symbol: "AAPL", price: "$232.80", change: "+0.42%", up: true },
  ]
};
