/**
 * RecommendationCard Component
 * 
 * Displays the recommended coating system with detailed benefits.
 * Helps users understand why this recommendation fits their project.
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Shield, Clock, Wrench, Thermometer, Snowflake } from "lucide-react";
import { colors } from "../../lib/design-system";
import type { CoatingType } from "../../types/calculator";

interface RecommendationCardProps {
  recommendedSystem: string;
  coatingType?: CoatingType;
}

const coatingDetails: Record<CoatingType, {
  icon: React.ReactNode;
  benefits: string[];
  lifespan: string;
  installationTime: string;
  maintenance: string;
  weather: string;
}> = {
  epoxy: {
    icon: <Shield size={32} style={{ color: colors.accent.blue }} />,
    benefits: [
      "Excellent chemical resistance",
      "High durability for daily use",
      "Cost-effective option",
      "Wide color selection",
    ],
    lifespan: "10-15 years",
    installationTime: "2-3 days",
    maintenance: "Low - simple cleaning",
    weather: "Good for Calgary's temperature swings",
  },
  polyaspartic: {
    icon: <Thermometer size={32} style={{ color: colors.accent.blue }} />,
    benefits: [
      "Superior UV resistance",
      "Fast curing (walkable in hours)",
      "Excellent moisture resistance",
      "Flexible with temperature changes",
    ],
    lifespan: "15-20 years",
    installationTime: "1-2 days",
    maintenance: "Very low",
    weather: "Ideal for Calgary's extreme cold",
  },
  polyurea: {
    icon: <Wrench size={32} style={{ color: colors.accent.blue }} />,
    benefits: [
      "Maximum durability",
      "Industrial-grade strength",
      "Excellent impact resistance",
      "Flexible substrate protection",
    ],
    lifespan: "20+ years",
    installationTime: "2-3 days",
    maintenance: "Very low",
    weather: "Best for harsh Calgary winters",
  },
  metallic: {
    icon: <Snowflake size={32} style={{ color: colors.accent.teal }} />,
    benefits: [
      "Stunning 3D metallic effect",
      "Unique depth and shine",
      "Premium aesthetic appeal",
      "Easy to clean",
    ],
    lifespan: "12-15 years",
    installationTime: "2-3 days",
    maintenance: "Low - avoid harsh chemicals",
    weather: "Good for indoor garages",
  },
  quartz: {
    icon: <Clock size={32} style={{ color: colors.accent.teal }} />,
    benefits: [
      "Excellent slip resistance",
      "Textured for safety",
      "High durability",
      "Great for high-traffic areas",
    ],
    lifespan: "15-20 years",
    installationTime: "2-3 days",
    maintenance: "Low",
    weather: "Excellent for all Calgary conditions",
  },
  not_sure: {
    icon: <Shield size={32} style={{ color: colors.text.secondary }} />,
    benefits: [
      "Balanced performance",
      "Good value for money",
      "Suitable for most applications",
      "Contractor can recommend based on site visit",
    ],
    lifespan: "10-15 years",
    installationTime: "2-3 days",
    maintenance: "Low",
    weather: "Suitable for Calgary climate",
  },
};

export function RecommendationCard({ recommendedSystem, coatingType = "epoxy" }: RecommendationCardProps) {
  const details = coatingDetails[coatingType] || coatingDetails.epoxy;

  return (
    <Card className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="flex-shrink-0 p-3 rounded-xl"
            style={{ backgroundColor: `${colors.accent.blue}10` }}
          >
            {details.icon}
          </div>
          <div className="flex-1">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.text.primary }}
            >
              Recommended System
            </h3>
            <p className="text-base" style={{ color: colors.text.secondary }}>
              {recommendedSystem}
            </p>
          </div>
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-xs mb-1" style={{ color: colors.text.secondary }}>
              Lifespan
            </div>
            <div className="text-sm font-semibold" style={{ color: colors.text.primary }}>
              {details.lifespan}
            </div>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-xs mb-1" style={{ color: colors.text.secondary }}>
              Installation
            </div>
            <div className="text-sm font-semibold" style={{ color: colors.text.primary }}>
              {details.installationTime}
            </div>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-xs mb-1" style={{ color: colors.text.secondary }}>
              Maintenance
            </div>
            <div className="text-sm font-semibold" style={{ color: colors.text.primary }}>
              {details.maintenance}
            </div>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-xs mb-1" style={{ color: colors.text.secondary }}>
              Calgary Weather
            </div>
            <div className="text-sm font-semibold" style={{ color: colors.text.primary }}>
              {details.weather}
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div>
          <h4
            className="text-sm font-semibold mb-3"
            style={{ color: colors.text.primary }}
          >
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {details.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm"
                style={{ color: colors.text.secondary }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: colors.accent.blue }}
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Card>
  );
}
