"use client";

import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const DataDeletionPolicy = () => {
  return (
    <div className="text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1
            className={`${anton.className} text-7xl font-bold text-lime-900 pt-10 mb-4`}
          >
            Data Deletion Policy
          </h1>
        </div>

        <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Introduction
          </h2>
          <p>
            This data deletion policy outlines the procedures and guidelines for
            the safe and timely deletion of customer data in accordance with the
            General Data Protection Regulation (GDPR). The policy ensures that
            data is retained only for the necessary period and promptly deleted
            when no longer needed for the purposes for which it was collected.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">Scope</h2>
          <p>
            This policy applies to all employees, contractors, and external
            suppliers who have access to customer data within Identum AS.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Definitions
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>
              <strong>Personal data:</strong> Any information relating to an
              identified or identifiable natural person.
            </li>
            <li>
              <strong>Data subject:</strong> An identifiable individual whom the
              personal data is about.
            </li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Data Classification
          </h2>
          <p>
            Customer data is classified based on their sensitivity, with
            specific attention to personal data under the GDPR.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Data Retention Periods
          </h2>
          <p>
            Customer data will be retained for a period of three months after
            the formal conclusion of the contract between the customer and
            Identum AS.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Data Deletion Procedures
          </h2>
          <p>
            Customer data will be securely and permanently deleted from all
            systems (including production, test, and staging environments) and
            databases within three months after the formal conclusion of the
            contract. Data deletion will be performed using industry-standard
            methods to ensure irreversibility.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Rights of the Data Subject
          </h2>
          <p>
            Data subjects have the right to request the deletion of their
            personal data. Furthermore:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>
              Upon request, Identum AS is obliged to provide data subjects with
              an export of their data in a commonly used and machine-readable
              format, to facilitate compliance with other legislation.
            </li>
            <li>
              If providing a data export is not feasible, Identum AS may offer a
              lookup license for a certain time to allow the data subject access
              to their data. In such cases, a customer contract and a data
              processing agreement must be signed to formalize the ongoing
              processing of data during the specified period.
            </li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Review and Audit
          </h2>
          <p>
            Regular reviews and audits will be conducted to ensure compliance
            with this data deletion policy. The data protection officer is
            responsible for overseeing these activities.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Employee Training
          </h2>
          <p>
            Employees will receive training on data deletion procedures and the
            importance of GDPR compliance.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Legal and Regulatory Compliance
          </h2>
          <p>
            This policy is designed to meet the GDPR and other relevant data
            protection laws.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Communication
          </h2>
          <p>
            This policy will be communicated to all relevant stakeholders, and
            any updates will be quickly shared.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Updates and Revisions
          </h2>
          <p>
            This policy will be periodically reviewed and updated as necessary
            to ensure continued compliance with applicable laws and regulations.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            External Resources
          </h2>
          <p>
            For additional insights into our data protection program, you may
            visit the Privacy section of the Visma Trust Centre:
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
