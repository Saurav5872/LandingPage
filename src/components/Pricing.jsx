import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹25,000",
      subtitle: "per month",
      desc: "Perfect for small businesses getting started",
      features: [
        "Basic Website Development",
        "Free Domain",
        "Free Hosting",
        "Social Media Setup",
        "Basic SEO Optimization",
        "Monthly Analytics Report",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹50,000",
      subtitle: "per month",
      desc: "Ideal for growing businesses",
      features: [
        "Advanced Website Development",
        "Free Domain",
        "Free Hosting",
        "Google & Meta Ads Management",
        "Complete Social Media Marketing",
        "Advanced SEO & Content",
        "Weekly Reports & Analytics",
        "Priority Phone Support",
        "Basic E-commerce Setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      subtitle: "per month",
      desc: "For large businesses and enterprises",
      features: [
        "Custom Web & App Development",
        "Free Domain",
        "Free Hosting",
        "Full-Scale Ad Campaigns",
        "Complete E-commerce Solutions",
        "Advanced Analytics & BI",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Integrations",
        "Performance Guarantees",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="pricing-title">Our Pricing <span className="text-orange">Plans</span></h2>
          <p className="pricing-subtitle">
            Choose the perfect plan tailored to your business needs.
          </p>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && (
                  <span className="badge-popular">Most Popular</span>
                )}
                <h4 className="plan-title">{plan.name}</h4>
                <h2 className="plan-price">{plan.price}</h2>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <p className="plan-desc">{plan.desc}</p>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="feature-icon" /> {feature}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-plan">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
