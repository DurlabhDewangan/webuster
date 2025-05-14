import CategoryHead from '../components/categories/Categoryhead';
import AppCard from '../components/categories/AppCard';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const categories =[
  {
    "id": "restaurants",
    "title": "Restaurant Technology Solutions",
    "description": "Streamline operations, enhance customer experience, and boost revenue with our specialized solutions",
    "solutions": [
      {
        "id": 1,
        "name": "POS Pro Restaurant Edition",
        "description": "Complete point-of-sale system with table management, menu engineering, and real-time analytics",
        "features": ["Tableside ordering", "Inventory tracking", "Staff management", "Customer loyalty"],
        "price": 899,
        "monthly": true,
        "rating": 4.9,
        "reviews": 142,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["QuickBooks", "Square", "Uber Eats", "DoorDash"]
      },
      {
        "id": 2,
        "name": "Reservation & Waitlist Manager",
        "description": "Automated reservation system with SMS notifications and dynamic waitlist management",
        "features": ["Online bookings", "Party management", "Floor plan optimization", "CRM integration"],
        "price": 299,
        "monthly": true,
        "rating": 4.7,
        "reviews": 87,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["OpenTable", "Resy", "Google My Business"]
      },
      {
        "id": 3,
        "name": "Kitchen Display System",
        "description": "Digital order management for kitchens with real-time updates and priority setting",
        "features": ["Order tracking", "Cook time alerts", "Multi-station view", "Integration with POS"],
        "price": 499,
        "monthly": true,
        "rating": 4.8,
        "reviews": 65,
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Toast", "Aloha", "Micros", "Square"]
      },
      {
        "id": 4,
        "name": "Restaurant Marketing Suite",
        "description": "All-in-one marketing platform designed specifically for restaurants",
        "features": ["Email campaigns", "Social media management", "Loyalty programs", "Review management"],
        "price": 199,
        "monthly": true,
        "rating": 4.5,
        "reviews": 112,
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Facebook", "Instagram", "Yelp", "Google Reviews"]
      },
      {
        "id": 5,
        "name": "Employee Scheduling & Payroll",
        "description": "Simplify staff scheduling and manage payroll effortlessly",
        "features": ["Time tracking", "Shift management", "Payroll export", "Labor cost insights"],
        "price": 349,
        "monthly": true,
        "rating": 4.6,
        "reviews": 73,
        "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["ADP", "Gusto", "QuickBooks"]
      },
      {
        "id": 6,
        "name": "Inventory Management System",
        "description": "Track stock levels, automate reorder alerts, and reduce food waste",
        "features": ["Real-time inventory", "Supplier management", "Recipe costing", "Waste tracking"],
        "price": 399,
        "monthly": true,
        "rating": 4.4,
        "reviews": 58,
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Square", "Xero", "QuickBooks"]
      },
      {
        "id": 7,
        "name": "Customer Feedback System",
        "description": "Collect real-time guest feedback to improve service quality",
        "features": ["In-store tablets", "SMS surveys", "Feedback analytics", "Auto-reply"],
        "price": 149,
        "monthly": true,
        "rating": 4.3,
        "reviews": 41,
        "image": "https://images.unsplash.com/photo-1598511727784-47c12eec0a6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Google Reviews", "Yelp", "CRM tools"]
      },
      {
        "id": 8,
        "name": "Digital Menu Boards",
        "description": "Dynamic in-store displays to showcase menus, promotions, and branding",
        "features": ["Cloud-based updates", "Scheduling", "HD video support", "Multi-location control"],
        "price": 599,
        "monthly": true,
        "rating": 4.5,
        "reviews": 36,
        "image": "https://images.unsplash.com/photo-1584680691263-e6c94f6c3df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Canva", "Google Drive"]
      },
      {
        "id": 9,
        "name": "Contactless Ordering System",
        "description": "Allow guests to order from their own devices with QR codes",
        "features": ["QR code menus", "Mobile ordering", "Table assignment", "Tip collection"],
        "price": 249,
        "monthly": true,
        "rating": 4.6,
        "reviews": 54,
        "image": "https://images.unsplash.com/photo-1597764690472-d9f49aa2f967?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Stripe", "Square", "Toast"]
      },
      {
        "id": 10,
        "name": "Multi-Location Management Dashboard",
        "description": "Manage multiple restaurant locations from a single platform",
        "features": ["Cross-location reporting", "Centralized menu management", "Role-based access", "Alert notifications"],
        "price": 799,
        "monthly": true,
        "rating": 4.8,
        "reviews": 39,
        "image": "https://images.unsplash.com/photo-1584143201039-3be6c3ea5f2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["All major POS systems", "Slack", "Email"]
      }
    ],
    "websitePackages": [
      {
        "id": "web-1",
        "name": "Starter Website",
        "description": "Simple, elegant website to establish your online presence",
        "features": ["1-5 page website", "Basic menu display", "Contact form", "Google Maps integration", "Mobile responsive", "Basic SEO setup"],
        "price": 499,
        "oneTime": true,
        "bestFor": "New restaurants needing basic online presence"
      },
      {
        "id": "web-2",
        "name": "Business Website",
        "description": "Enhanced features for growing restaurants",
        "features": ["5-10 page website", "Interactive menu with categories", "Online reservation system", "Photo gallery", "Customer reviews section", "Advanced SEO"],
        "price": 1299,
        "oneTime": true,
        "bestFor": "Established restaurants wanting more functionality"
      },
      {
        "id": "web-3",
        "name": "Pro Website",
        "description": "Complete online solution for premium restaurants",
        "features": ["10-20 page website", "Online ordering integration", "Loyalty program integration", "Event management", "Blog section", "Multilingual support", "Premium SEO"],
        "price": 2499,
        "oneTime": true,
        "bestFor": "High-end restaurants needing full online capabilities"
      },
      {
        "id": "web-4",
        "name": "Custom Website",
        "description": "Tailored solution for unique requirements",
        "features": ["Fully custom design", "Unlimited pages", "Custom integrations", "API development", "Priority support", "Dedicated account manager"],
        "price": "Custom",
        "oneTime": false,
        "bestFor": "Restaurants with specific needs and larger budgets"
      },
      {
        "id": "web-5",
        "name": "E-commerce Add-on",
        "description": "Add a store section to sell branded merchandise or packaged goods",
        "features": ["Online store integration", "Payment gateway setup", "Product catalog", "Shipping calculator", "Cart & checkout", "Inventory alerts"],
        "price": 899,
        "oneTime": true,
        "bestFor": "Restaurants selling products online"
      },
      {
        "id": "web-6",
        "name": "Event Booking Website",
        "description": "Ideal for restaurants hosting private events or catering",
        "features": ["Event calendar", "Online booking form", "Event gallery", "Custom event pages", "Email confirmations"],
        "price": 1399,
        "oneTime": true,
        "bestFor": "Restaurants with private events or banquet services"
      },
      {
        "id": "web-7",
        "name": "Franchise Web Portal",
        "description": "Centralized web platform for multi-location/franchise restaurants",
        "features": ["Location finder", "Franchise login", "Global menu control", "Recruitment section", "News & updates"],
        "price": 2999,
        "oneTime": true,
        "bestFor": "Franchise owners or chains"
      },
      {
        "id": "web-8",
        "name": "Landing Page Express",
        "description": "Quick-launch landing page to capture leads or promote offers",
        "features": ["1-page design", "Hero image/banner", "Call-to-action buttons", "Email signup", "Analytics integration"],
        "price": 299,
        "oneTime": true,
        "bestFor": "Restaurants launching promos or testing new concepts"
      },
      {
        "id": "web-9",
        "name": "Food Blog Integration",
        "description": "Add a recipe or story-driven blog to engage your audience",
        "features": ["Blog post templates", "SEO-ready", "Newsletter signup", "Commenting system", "Author bios"],
        "price": 799,
        "oneTime": true,
        "bestFor": "Restaurants focusing on brand storytelling and content marketing"
      },
      {
        "id": "web-10",
        "name": "Multilingual Site Upgrade",
        "description": "Reach a broader audience with a multilingual website",
        "features": ["Language toggle", "Manual or automatic translations", "SEO per language", "RTL support"],
        "price": 999,
        "oneTime": true,
        "bestFor": "Restaurants in tourist-heavy or diverse communities"
      }
    ]
  }

,
    
  {
    "id": "retail",
    "title": "Retail Technology Solutions",
    "description": "Enhance customer experience, streamline inventory, and grow your business with cutting-edge retail technology",
    "solutions": [
      {
        "id": 1,
        "name": "POS Retail Pro",
        "description": "Advanced retail POS system with multi-location support and loyalty integration",
        "features": ["Inventory sync", "Customer loyalty", "Multi-store support", "Real-time sales tracking"],
        "price": 899,
        "monthly": true,
        "rating": 4.8,
        "reviews": 187,
        "image": "https://images.unsplash.com/photo-1542838688-8f90c1c3b8b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Shopify", "QuickBooks", "Square", "Stripe"]
      },
      {
        "id": 2,
        "name": "Inventory Central",
        "description": "Smart inventory management with low-stock alerts and reorder automation",
        "features": ["Low-stock notifications", "Multi-warehouse tracking", "Supplier management", "Barcode integration"],
        "price": 599,
        "monthly": true,
        "rating": 4.5,
        "reviews": 102,
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Zoho Inventory", "QuickBooks", "Amazon"]
      },
      {
        "id": 3,
        "name": "Customer Loyalty Engine",
        "description": "Turn shoppers into repeat buyers with a custom-branded loyalty program",
        "features": ["Points system", "Rewards tracking", "Birthday offers", "Referral incentives"],
        "price": 249,
        "monthly": true,
        "rating": 4.6,
        "reviews": 77,
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Square Loyalty", "Mailchimp", "SMS"]
      },
      {
        "id": 4,
        "name": "Retail Workforce Manager",
        "description": "Manage employee shifts, payroll, and productivity in one platform",
        "features": ["Shift scheduling", "Clock-in/out tracking", "Payroll export", "Performance reports"],
        "price": 399,
        "monthly": true,
        "rating": 4.4,
        "reviews": 64,
        "image": "https://images.unsplash.com/photo-1569180888202-3e6db94e1f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["ADP", "Gusto", "Xero"]
      },
      {
        "id": 5,
        "name": "Omnichannel Retail Suite",
        "description": "Unify online and in-store operations with real-time inventory synchronization",
        "features": ["Barcode scanning", "Purchase ordering", "Vendor management", "E-commerce integration"],
        "price": 1299,
        "monthly": true,
        "rating": 4.8,
        "reviews": 203,
        "image": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Shopify", "WooCommerce", "Amazon", "QuickBooks"]
      },
      {
        "id": 6,
        "name": "Retail Analytics Pro",
        "description": "Advanced business intelligence for retail operations with predictive analytics",
        "features": ["Sales forecasting", "Customer segmentation", "Inventory optimization", "KPI dashboards"],
        "price": 599,
        "monthly": true,
        "rating": 4.6,
        "reviews": 56,
        "image": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Microsoft Power BI", "Tableau", "Google Analytics"]
      },
      {
        "id": 7,
        "name": "Mobile Checkout System",
        "description": "Enable associates to check customers out anywhere in the store with mobile devices",
        "features": ["Portable payments", "Receipt emailing", "Inventory lookup", "Customer profile access"],
        "price": 749,
        "monthly": true,
        "rating": 4.7,
        "reviews": 98,
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Apple Pay", "Google Pay", "Stripe", "PayPal"]
      },
      {
        "id": 8,
        "name": "Visual Merchandising Planner",
        "description": "Plan and optimize store layouts and product placements with 3D visualization",
        "features": ["Space planning", "Planogram creation", "Product performance tracking", "Team collaboration"],
        "price": 399,
        "monthly": true,
        "rating": 4.4,
        "reviews": 42,
        "image": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["AutoCAD", "SketchUp", "Salesforce", "Shopify"]
      },
      {
        "id": 9,
        "name": "Returns & Exchange Manager",
        "description": "Simplify returns, exchanges, and refunds with flexible options and reporting",
        "features": ["Return reason tracking", "Store credit support", "Fraud alerts", "Return window policies"],
        "price": 299,
        "monthly": true,
        "rating": 4.3,
        "reviews": 53,
        "image": "https://images.unsplash.com/photo-1515169273892-25f8f0b7169c?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["Shopify", "Stripe", "Square"]
      },
      {
        "id": 10,
        "name": "Retail Security & Loss Prevention",
        "description": "Protect your assets with digital surveillance and real-time alerts",
        "features": ["Camera integration", "POS activity monitoring", "Theft alerts", "Audit logs"],
        "price": 699,
        "monthly": true,
        "rating": 4.5,
        "reviews": 39,
        "image": "https://images.unsplash.com/photo-1581092334663-4be0c2ac2d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        "integrations": ["ADT", "Verkada", "POS systems"]
      }
    ],
    "websitePackages": [
      {
        "id": "web-1",
        "name": "Starter Shop",
        "description": "Basic online store to get your products online",
        "features": ["1-5 page website", "Up to 50 products", "Basic product display", "Contact form", "Mobile responsive", "Basic SEO setup"],
        "price": 799,
        "oneTime": true,
        "bestFor": "Small shops starting online sales"
      },
      {
        "id": "web-2",
        "name": "Business Shop",
        "description": "Enhanced e-commerce features for growing retailers",
        "features": ["5-15 page website", "Up to 500 products", "Product categories & filters", "Shopping cart", "Basic payment processing", "Inventory management", "Advanced SEO"],
        "price": 1999,
        "oneTime": true,
        "bestFor": "Retailers with expanding product lines"
      },
      {
        "id": "web-3",
        "name": "Pro Shop",
        "description": "Complete e-commerce solution for serious retailers",
        "features": ["15-30 page website", "Unlimited products", "Advanced product variants", "Multiple payment gateways", "Shipping calculator", "Customer accounts", "Marketing tools", "Premium SEO"],
        "price": 3999,
        "oneTime": true,
        "bestFor": "Established retailers needing full online store"
      },
      {
        "id": "web-4",
        "name": "Custom Shop",
        "description": "Tailored e-commerce solution for unique requirements",
        "features": ["Fully custom design", "Unlimited products/pages", "Custom integrations", "API development", "POS integration", "Enterprise security", "Priority support", "Dedicated account manager"],
        "price": "Custom",
        "oneTime": false,
        "bestFor": "Large retailers with complex needs"
      },
      {
        "id": "web-5",
        "name": "One-Page Promo Store",
        "description": "Quick-launch one-page shop to sell featured products or promos",
        "features": ["1-page layout", "Promo countdown timer", "Checkout integration", "Mobile responsive", "Analytics"],
        "price": 399,
        "oneTime": true,
        "bestFor": "Flash sales and new product launches"
      },
      {
        "id": "web-6",
        "name": "Retail Blog Add-on",
        "description": "Boost SEO and connect with customers through content marketing",
        "features": ["Blog post templates", "SEO tools", "Newsletter signup", "Commenting system", "Tagging and categories"],
        "price": 699,
        "oneTime": true,
        "bestFor": "Retailers looking to grow organic traffic"
      },
      {
        "id": "web-7",
        "name": "Subscription Store Setup",
        "description": "Sell subscription boxes or memberships with recurring billing",
        "features": ["Subscription product setup", "Recurring payments", "Customer dashboard", "Cancellation tools", "Usage reports"],
        "price": 1499,
        "oneTime": true,
        "bestFor": "Retailers offering subscription-based products"
      },
      {
        "id": "web-8",
        "name": "Multilingual Store Upgrade",
        "description": "Reach international audiences with multi-language support",
        "features": ["Language toggle", "Auto/manual translation", "Localized SEO", "RTL layout"],
        "price": 999,
        "oneTime": true,
        "bestFor": "Retailers with global or multilingual customers"
      },
      {
        "id": "web-9",
        "name": "Marketplace Integrator",
        "description": "Sell across Amazon, eBay, and Etsy from your main site",
        "features": ["Marketplace feed sync", "Product mapping", "Inventory tracking", "Order management", "Sales reports"],
        "price": 1299,
        "oneTime": true,
        "bestFor": "Retailers using multiple sales channels"
      },
      {
        "id": "web-10",
        "name": "Retail App Companion Site",
        "description": "Landing site for your store’s mobile app with download links and feature highlights",
        "features": ["App showcase", "iOS/Android links", "Push notifications", "User testimonials", "Promo videos"],
        "price": 499,
        "oneTime": true,
        "bestFor": "Stores with a dedicated mobile shopping app"
      }
    ]
  }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {categories.map((category) => (
          <section key={category.id} className="mb-20">
            <CategoryHead
              title={category.title}
              description={category.description}
            />

            {/* Website Packages */}
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">Website Packages</h2>
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                  {category.websitePackages.map((pkg) => (
                    <div key={pkg.id} className="w-80 flex-shrink-0">
                      <AppCard app={pkg} type="website" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Solutions */}
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">Business Solutions</h2>
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                  {category.solutions.map((solution) => (
                    <div key={solution.id} className="w-80 flex-shrink-0">
                      <AppCard app={solution} type="solution" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 cursor-pointer transition-colors"
            onClick={() => navigate('/solutions/industry')}
          >
            <h3 className="text-lg font-semibold mb-3">Industry Solutions</h3>
            <p className="text-gray-600 mb-4">Specialized tools for healthcare, education, hospitality and more</p>
            <span className="text-blue-600 text-sm font-medium">Explore →</span>
          </div>
          
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 cursor-pointer transition-colors"
            onClick={() => navigate('/solutions/integrations')}
          >
            <h3 className="text-lg font-semibold mb-3">Integration Partners</h3>
            <p className="text-gray-600 mb-4">Connect with 100+ business tools you already use</p>
            <span className="text-blue-600 text-sm font-medium">See partners →</span>
          </div>
          
          <div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 cursor-pointer transition-colors"
            onClick={() => navigate('/support/faq')}
          >
            <h3 className="text-lg font-semibold mb-3">Have Questions?</h3>
            <p className="text-gray-600 mb-4">Find answers in our comprehensive FAQ section</p>
            <span className="text-blue-600 text-sm font-medium">View FAQs →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;