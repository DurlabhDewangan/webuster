import { useState } from 'react';
import CategoryHead from '../components/categories/Categoryhead';
import IndustrySolutions from '../components/categories/IndustrySolutions';
import AppCard from '../components/categories/AppCard';
import FilterBar from '../components/categories/FilterBar';
import EnterpriseSolutions from '../components/categories/EnterpriseSolutions';
import IntegrationPartners from '../components/categories/IntegrationPartners';
import FAQ from '../components/categories/FAQ';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('restaurants');
  
  // Comprehensive business application data
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
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
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
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
          integrations: ["OpenTable", "Resy", "Google My Business"]
        }
      ]
    },
    retail: {
      title: "Retail Management Systems",
      description: "Comprehensive solutions to optimize inventory, sales, and customer engagement for retail businesses",
      solutions: [
        {
          id: 3,
          name: "Omnichannel Retail Suite",
          description: "Unify online and in-store operations with real-time inventory synchronization",
          features: ["Barcode scanning", "Purchase ordering", "Vendor management", "E-commerce integration"],
          price: 1299,
          monthly: true,
          rating: 4.8,
          reviews: 203,
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          integrations: ["Shopify", "WooCommerce", "Amazon", "QuickBooks"]
        },
        {
          id: 4,
          name: "Retail Analytics Pro",
          description: "Advanced business intelligence for retail operations with predictive analytics",
          features: ["Sales forecasting", "Customer segmentation", "Inventory optimization", "KPI dashboards"],
          price: 599,
          monthly: true,
          rating: 4.6,
          reviews: 56,
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          integrations: ["Microsoft Power BI", "Tableau", "Google Analytics"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
    
        
<CategoryHead
     title={businessSolutions[activeCategory].title}
          description={businessSolutions[activeCategory].description}/>

        <FilterBar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessSolutions[activeCategory].solutions.map((solution) => (
            <AppCard key={solution.id} app={solution} />
          ))}
        </div>

        <IndustrySolutions />
        <EnterpriseSolutions />
        <IntegrationPartners />
        <FAQ />
      </div>
    </div>
  );
};

export default Categories;