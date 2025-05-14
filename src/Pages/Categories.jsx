

import { useState } from 'react';
import CategoryHead from '../components/categories/Categoryhead';
import IndustrySolutions from '../components/categories/IndustrySolutions';
import AppCard from '../components/categories/AppCard';
import FilterBar from '../components/categories/FilterBar';
import EnterpriseSolutions from '../components/categories/EnterpriseSolutions';
import IntegrationPartners from '../components/categories/IntegrationPartners';
import FAQ from '../components/categories/FAQ';
import WebsitePackageCard from '../components/categories/WebsitePackageCard'; // You'll need to create this component

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('restaurants');
  const [showWebsitePackages, setShowWebsitePackages] = useState(true); // Toggle between packages and solutions

  const websitePackages = {
    restaurants: {
      title: "Restaurant Website Packages",
      description: "Professional websites designed specifically for restaurants to showcase your menu and attract customers",
      packages: [
        {
          id: 'web-1',
          name: "Starter Website",
          description: "Simple, elegant website to establish your online presence",
          features: [
            "1-5 page website",
            "Basic menu display",
            "Contact form",
            "Google Maps integration",
            "Mobile responsive",
            "Basic SEO setup"
          ],
          price: 499,
          oneTime: true,
          bestFor: "New restaurants needing basic online presence"
        },
        {
          id: 'web-2',
          name: "Business Website",
          description: "Enhanced features for growing restaurants",
          features: [
            "5-10 page website",
            "Interactive menu with categories",
            "Online reservation system",
            "Photo gallery",
            "Customer reviews section",
            "Advanced SEO"
          ],
          price: 1299,
          oneTime: true,
          bestFor: "Established restaurants wanting more functionality"
        },
        {
          id: 'web-3',
          name: "Pro Website",
          description: "Complete online solution for premium restaurants",
          features: [
            "10-20 page website",
            "Online ordering integration",
            "Loyalty program integration",
            "Event management",
            "Blog section",
            "Multilingual support",
            "Premium SEO"
          ],
          price: 2499,
          oneTime: true,
          bestFor: "High-end restaurants needing full online capabilities"
        },
        {
          id: 'web-4',
          name: "Custom Website",
          description: "Tailored solution for unique requirements",
          features: [
            "Fully custom design",
            "Unlimited pages",
            "Custom integrations",
            "API development",
            "Priority support",
            "Dedicated account manager"
          ],
          price: "Custom",
          oneTime: false, // Custom pricing
          bestFor: "Restaurants with specific needs and larger budgets"
        }
      ]
    },
    retail: {
      title: "Retail Shop Website Packages",
      description: "E-commerce ready websites to showcase your products and drive online sales",
      packages: [
        {
          id: 'web-5',
          name: "Starter Shop",
          description: "Basic online store to get your products online",
          features: [
            "1-5 page website",
            "Up to 50 products",
            "Basic product display",
            "Contact form",
            "Mobile responsive",
            "Basic SEO setup"
          ],
          price: 799,
          oneTime: true,
          bestFor: "Small shops starting online sales"
        },
        {
          id: 'web-6',
          name: "Business Shop",
          description: "Enhanced e-commerce features for growing retailers",
          features: [
            "5-15 page website",
            "Up to 500 products",
            "Product categories & filters",
            "Shopping cart",
            "Basic payment processing",
            "Inventory management",
            "Advanced SEO"
          ],
          price: 1999,
          oneTime: true,
          bestFor: "Retailers with expanding product lines"
        },
        {
          id: 'web-7',
          name: "Pro Shop",
          description: "Complete e-commerce solution for serious retailers",
          features: [
            "15-30 page website",
            "Unlimited products",
            "Advanced product variants",
            "Multiple payment gateways",
            "Shipping calculator",
            "Customer accounts",
            "Marketing tools",
            "Premium SEO"
          ],
          price: 3999,
          oneTime: true,
          bestFor: "Established retailers needing full online store"
        },
        {
          id: 'web-8',
          name: "Custom Shop",
          description: "Tailored e-commerce solution for unique requirements",
          features: [
            "Fully custom design",
            "Unlimited products/pages",
            "Custom integrations",
            "API development",
            "POS integration",
            "Enterprise security",
            "Priority support",
            "Dedicated account manager"
          ],
          price: "Custom",
          oneTime: false, // Custom pricing
          bestFor: "Large retailers with complex needs"
        }
      ]
    }
  };

const businessSolutions = {
    restaurants: {
      title: "Restaurant Technology Solutions",
      description: "Streamline operations, enhance customer experience, and boost revenue with our specialized restaurant management systems",
      solutions: [
        {
          id: 1,
          name: "POS Pro Restaurant Edition",
          description: "Complete point-of-sale system with table management, menu engineering, and real-time analytics",
          features: ["Tableside ordering", "Inventory tracking", "Staff management", "Customer loyalty"],
          price: 899,
          monthly: true,
          rating: 4.9,
          reviews: 142,
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["QuickBooks", "Square", "Uber Eats", "DoorDash"]
        },
        {
          id: 2,
          name: "Reservation & Waitlist Manager",
          description: "Automated reservation system with SMS notifications and dynamic waitlist management",
          features: ["Online bookings", "Party management", "Floor plan optimization", "CRM integration"],
          price: 299,
          monthly: true,
          rating: 4.7,
          reviews: 87,
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["OpenTable", "Resy", "Google My Business"]
        },
        {
          id: 3,
          name: "Kitchen Display System",
          description: "Digital order management for kitchens with real-time updates and priority setting",
          features: ["Order tracking", "Cook time alerts", "Multi-station view", "Integration with POS"],
          price: 499,
          monthly: true,
          rating: 4.8,
          reviews: 65,
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["Toast", "Aloha", "Micros", "Square"]
        },
        {
          id: 4,
          name: "Restaurant Marketing Suite",
          description: "All-in-one marketing platform designed specifically for restaurants",
          features: ["Email campaigns", "Social media management", "Loyalty programs", "Review management"],
          price: 199,
          monthly: true,
          rating: 4.5,
          reviews: 112,
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["Facebook", "Instagram", "Yelp", "Google Reviews"]
        }
      ]
    },
    retail: {
      title: "Retail Management Systems",
      description: "Comprehensive solutions to optimize inventory, sales, and customer engagement for retail businesses",
      solutions: [
        {
          id: 5,
          name: "Omnichannel Retail Suite",
          description: "Unify online and in-store operations with real-time inventory synchronization",
          features: ["Barcode scanning", "Purchase ordering", "Vendor management", "E-commerce integration"],
          price: 1299,
          monthly: true,
          rating: 4.8,
          reviews: 203,
          image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["Shopify", "WooCommerce", "Amazon", "QuickBooks"]
        },
        {
          id: 6,
          name: "Retail Analytics Pro",
          description: "Advanced business intelligence for retail operations with predictive analytics",
          features: ["Sales forecasting", "Customer segmentation", "Inventory optimization", "KPI dashboards"],
          price: 599,
          monthly: true,
          rating: 4.6,
          reviews: 56,
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["Microsoft Power BI", "Tableau", "Google Analytics"]
        },
        {
          id: 7,
          name: "Mobile Checkout System",
          description: "Enable associates to check customers out anywhere in the store with mobile devices",
          features: ["Portable payments", "Receipt emailing", "Inventory lookup", "Customer profile access"],
          price: 749,
          monthly: true,
          rating: 4.7,
          reviews: 98,
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["Apple Pay", "Google Pay", "Stripe", "PayPal"]
        },
        {
          id: 8,
          name: "Visual Merchandising Planner",
          description: "Plan and optimize store layouts and product placements with 3D visualization",
          features: ["Space planning", "Planogram creation", "Product performance tracking", "Team collaboration"],
          price: 399,
          monthly: true,
          rating: 4.4,
          reviews: 42,
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          integrations: ["AutoCAD", "SketchUp", "Salesforce", "Shopify"]
        }
      ]
    }
  };

  const currentCategory = businessSolutions[activeCategory];
  const currentWebsitePackages = websitePackages[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {currentCategory ? (
          <>
            <CategoryHead
              title={currentCategory.title}
              description={currentCategory.description}
            />

            <FilterBar
              activeCategory={activeCategory}
              setActiveCategory={(category) => {
                if (businessSolutions[category]) {
                  setActiveCategory(category);
                setShowWebsitePackages(true); // Reset to show packages when changing category
                }
              }}
            />

            {/* Toggle between website packages and solutions */}
            <div className="flex justify-center my-6">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => setShowWebsitePackages(true)}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    showWebsitePackages 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Website Packages
                </button>
                <button
                  onClick={() => setShowWebsitePackages(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    !showWebsitePackages 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Business Solutions
                </button>
              </div>
            </div>

            {showWebsitePackages ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">{currentWebsitePackages.title}</h2>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                  {currentWebsitePackages.description}
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentWebsitePackages.packages.map((pkg) => (
                    <WebsitePackageCard key={pkg.id} package={pkg} />
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCategory.solutions.map((solution) => (
                  <AppCard key={solution.id} app={solution} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-red-600 text-xl">Category not found.</div>
        )}

        <IndustrySolutions />
        <EnterpriseSolutions />
        <IntegrationPartners />
        <FAQ />
      </div>
    </div>
  );
};

export default Categories;