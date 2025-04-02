"use client";

import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Compliance = () => {
  return (
    <div className="text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1
            className={`${anton.className} text-7xl font-bold text-lime-900 pt-10 mb-4`}
          >
            Compliance Policy
          </h1>
        </div>

        <section className="space-y-8 text-2xl border-solid pt-15 border-stone-700 border-t">
          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Introduction
          </h2>
          <p>
            Our compliance policy ensures that our business operations,
            products, and services meet the required legal, regulatory, and
            internal standards. This policy is designed to demonstrate our
            commitment to compliance with all relevant laws and regulations, as
            well as our commitment to ethical business practices.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">Scope</h2>
          <p>
            This policy applies to all employees, contractors, partners, and
            third-party suppliers involved in any business processes within the
            company.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Legal and Regulatory Compliance
          </h2>
          <p>
            We comply with all applicable local, national, and international
            laws and regulations, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>Anti-Money Laundering (AML) Regulations</li>
            <li>Health and Safety Legislation</li>
            <li>Industry-Specific Regulations</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Internal Compliance Procedures
          </h2>
          <p>
            We have implemented internal compliance procedures to ensure all
            business practices adhere to the highest legal and ethical
            standards. These procedures include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>Regular compliance audits and reviews</li>
            <li>Employee training programs on compliance issues</li>
            <li>Whistleblower protections and reporting mechanisms</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Responsibilities
          </h2>
          <p>
            All employees and contractors have a responsibility to comply with
            the law and the internal compliance policies of the company. The
            following groups have specific responsibilities:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>
              <strong>Compliance Officer:</strong> Oversees all compliance
              activities, audits, and reports.
            </li>
            <li>
              <strong>Managers:</strong> Ensure that their teams are aware of
              and follow the compliance procedures.
            </li>
            <li>
              <strong>Employees:</strong> Must report any suspected violations
              or irregularities to the Compliance Officer.
            </li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Monitoring and Enforcement
          </h2>
          <p>
            Compliance will be regularly monitored, and any violations will
            result in appropriate disciplinary actions. These actions can
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-xl">
            <li>Verbal or written warnings</li>
            <li>Suspension or termination of employment</li>
            <li>Legal actions, where necessary</li>
          </ul>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Reporting Violations
          </h2>
          <p>
            We encourage all employees and stakeholders to report any compliance
            concerns. Reports can be made anonymously and will be investigated
            thoroughly to ensure corrective actions are taken.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Continuous Improvement
          </h2>
          <p>
            This policy will be reviewed periodically to ensure its
            effectiveness and compliance with evolving laws and regulations.
            Changes to the policy will be communicated promptly to all
            employees.
          </p>

          <h2 className="text-5xl font-semibold text-lime-900 mt-8">
            Conclusion
          </h2>
          <p>
            Compliance is a cornerstone of our business operations. We are
            committed to upholding the highest standards of legal, regulatory,
            and ethical compliance to protect our stakeholders and ensure the
            long-term success of our company.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Compliance;
