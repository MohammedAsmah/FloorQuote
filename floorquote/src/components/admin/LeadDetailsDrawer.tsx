"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  FileText,
  Clock,
  Building,
  CheckCircle,
  Download,
  Trash2,
  Archive,
  UserCheck,
  Sparkles,
  Calculator as CalcIcon,
  Inbox,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { colors } from "@/src/lib/design-system";
import { LeadTableRow } from "@/src/types/admin";

interface LeadDetailsDrawerProps {
  lead: LeadTableRow | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateLead?: () => void;
}

export function LeadDetailsDrawer({
  lead,
  isOpen,
  onClose,
  onUpdateLead,
}: LeadDetailsDrawerProps) {
  const [internalNotes, setInternalNotes] = useState<string>(lead?.internalNotes || "");
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [saleValueInput, setSaleValueInput] = useState<string>(lead?.saleValue?.toString() || "");
  const [showMarkSold, setShowMarkSold] = useState(false);

  if (!lead) return null;

  const isDirect = lead.source === "DIRECT";

  const handleSaveNotes = async () => {
    setIsSavingNotes(true);
    try {
      await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ internalNotes }),
      });
      if (onUpdateLead) onUpdateLead();
    } catch {
      // Ignored for dev preview
    } finally {
      setIsSavingNotes(false);
    }
  };

  const handleMarkSold = async () => {
    const val = parseFloat(saleValueInput);
    if (isNaN(val)) return;
    try {
      await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "COMPLETED", saleValue: val, soldAt: new Date().toISOString() }),
      });
      setShowMarkSold(false);
      if (onUpdateLead) onUpdateLead();
    } catch {
      // Ignored for dev preview
    }
  };

  const handleDownloadExport = () => {
    const textContent = `FLOORQUOTE LEAD DETAILS
----------------------------------------
Reference: ${lead.referenceNumber}
Source: ${lead.source}
Status: ${lead.status}
Created: ${new Date(lead.createdAt).toLocaleString()}

CUSTOMER INFORMATION
Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
City: ${lead.city}
Postal Code: ${lead.postalCode || "Not provided"}
Preferred Contact Method: ${lead.preferredContactMethod || "Not provided"}
Preferred Contact Time: ${lead.preferredContactTime || "Not provided"}

PROJECT DETAILS (${isDirect ? "DIRECT QUOTE" : "CALCULATOR ESTIMATE"})
${
  isDirect
    ? `Project Type: ${lead.projectType === "garage_floor" ? "Garage Floor" : lead.projectTypeOther || lead.projectType || "Not provided"}
Garage Size: ${lead.garageSizeDirect?.replace("_", " ") || "Not provided"}
Approx SqFt: ${lead.squareFeetDirect ? `${lead.squareFeetDirect} sq ft` : "Not provided"}
Flooring Preference: ${lead.coatingTypeDirect || "Not provided"}
Floor Condition: ${lead.floorConditionDirect?.replace("_", " ") || "Not provided"}
Existing Coating: ${lead.existingCoatingDirect || "Not provided"} ${lead.existingCoatingOther ? `(${lead.existingCoatingOther})` : ""}
Moisture Issues: ${lead.moistureIssueDirect || "Not provided"}
Timeline: ${lead.timelineDirect?.replace(/_/g, " ") || "Not provided"}
Garage Availability: ${lead.garageAvailability || "Not provided"}`
    : `Square Feet: ${(lead.calculation as any)?.squareFeet || "Not provided"}
Garage Size: ${lead.calculation?.coatingType || "Not provided"}
Estimated Price Range: $${lead.calculation?.estimatedLow?.toLocaleString() || 0} - $${lead.calculation?.estimatedHigh?.toLocaleString() || 0}
Recommended System: ${lead.calculation?.recommendedSystem || "Not provided"}
Timeline: ${lead.calculation?.timeline || "Not provided"}`
}

CUSTOMER NOTES:
${lead.additionalNotes || "Not provided"}
`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Lead-${lead.referenceNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col bg-white shadow-2xl dark:bg-slate-950 dark:border-l dark:border-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-5 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                  {isDirect ? <Inbox className="h-5 w-5" /> : <CalcIcon className="h-5 w-5" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {lead.referenceNumber}
                    </h2>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isDirect
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                      }`}
                    >
                      {isDirect ? "📩 Direct Quote" : "🧮 Calculator"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Created on {new Date(lead.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-900 dark:hover:text-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Quick Actions Bar */}
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" onClick={handleDownloadExport}>
                  <Download className="mr-1.5 h-3.5 w-3.5" /> Export Text/PDF
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setShowMarkSold(!showMarkSold)}>
                  <DollarSign className="mr-1.5 h-3.5 w-3.5 text-emerald-500" /> Mark Sold
                </Button>
              </div>

              {showMarkSold && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 space-y-3">
                  <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300">
                    Enter Sale Amount & Complete Lead
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="e.g. 4500"
                      value={saleValueInput}
                      onChange={(e) => setSaleValueInput(e.target.value)}
                      className="flex-1 rounded-xl border border-emerald-300 px-3 py-2 text-sm outline-none dark:bg-slate-900 dark:border-emerald-700"
                    />
                    <Button variant="primary" size="sm" onClick={handleMarkSold}>
                      Confirm Sold
                    </Button>
                  </div>
                </div>
              )}

              {/* Customer Contact Section */}
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-500" /> Customer Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Full Name</span>
                    <strong className="text-slate-800 dark:text-slate-200">{lead.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Email Address</span>
                    <strong className="text-slate-800 dark:text-slate-200">{lead.email}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Phone Number</span>
                    <strong className="text-slate-800 dark:text-slate-200">{lead.phone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Location / City</span>
                    <strong className="text-slate-800 dark:text-slate-200">
                      {lead.city} {lead.postalCode ? `(${lead.postalCode})` : ""}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Preferred Contact Method</span>
                    <strong className="text-slate-800 dark:text-slate-200 capitalize">
                      {lead.preferredContactMethod || "Not provided"}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Preferred Contact Time</span>
                    <strong className="text-slate-800 dark:text-slate-200 capitalize">
                      {lead.preferredContactTime || "Not provided"}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-purple-500" /> Project Specifications
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                    {isDirect ? "Direct Entry" : "Calculated Flow"}
                  </span>
                </div>

                {isDirect ? (
                  /* DIRECT QUOTE DETAILS */
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Project Type</span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {lead.projectType === "garage_floor"
                          ? "Garage Floor"
                          : lead.projectTypeOther || lead.projectType || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Garage Size</span>
                      <strong className="text-slate-800 dark:text-slate-200 uppercase">
                        {lead.garageSizeDirect?.replace("_", " ") || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Approx. Area</span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {lead.squareFeetDirect ? `${lead.squareFeetDirect} sq ft` : "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Flooring Preference</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.coatingTypeDirect || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Concrete Condition</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.floorConditionDirect?.replace("_", " ") || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Existing Coating</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.existingCoatingDirect || "Not provided"}{" "}
                        {lead.existingCoatingOther ? `(${lead.existingCoatingOther})` : ""}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Moisture Issues</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.moistureIssueDirect || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Project Timeline</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.timelineDirect?.replace(/_/g, " ") || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Garage Available</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.garageAvailability || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Estimated Cost</span>
                      <strong className="text-slate-400 italic">Not calculated</strong>
                    </div>
                  </div>
                ) : (
                  /* CALCULATOR ESTIMATE DETAILS */
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Calculated Area</span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {(lead.calculation as any)?.squareFeet ? `${(lead.calculation as any).squareFeet} sq ft` : "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Coating Choice</span>
                      <strong className="text-slate-800 dark:text-slate-200 uppercase">
                        {lead.calculation?.coatingType || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Floor Condition</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.calculation?.floorCondition || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Crack Level</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.calculation?.crackLevel || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Existing Coating</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.calculation?.existingCoating || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Decorative Finish</span>
                      <strong className="text-slate-800 dark:text-slate-200 capitalize">
                        {lead.calculation?.decorativeFinish || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Recommended System</span>
                      <strong className="text-blue-600 dark:text-blue-400">
                        {lead.calculation?.recommendedSystem || "Not provided"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Estimated Range</span>
                      <strong className="text-emerald-600 font-bold dark:text-emerald-400 text-sm">
                        ${lead.calculation?.estimatedLow?.toLocaleString()} - ${lead.calculation?.estimatedHigh?.toLocaleString()}
                      </strong>
                    </div>
                  </div>
                )}

                {/* Additional Notes */}
                {lead.additionalNotes && (
                  <div className="border-t pt-3 border-slate-100 dark:border-slate-900">
                    <span className="text-xs text-slate-400 block mb-1">Customer Notes</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-900 p-3 rounded-xl">
                      &quot;{lead.additionalNotes}&quot;
                    </p>
                  </div>
                )}
              </div>

              {/* Internal Admin Notes */}
              <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber-500" /> Internal Contractor Notes
                </h3>
                <textarea
                  rows={3}
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  placeholder="Add private contractor matching notes..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 outline-none focus:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
                <Button variant="secondary" size="sm" onClick={handleSaveNotes} isLoading={isSavingNotes}>
                  Save Internal Notes
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
