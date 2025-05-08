import type { Metadata } from "next"
import SecurityTrainingMedicalStaffClient from "./SecurityTrainingMedicalStaffClient"

export const metadata: Metadata = {
  title: "IT Staff Training: Building a Security-Conscious Medical Team | IT Launch",
  description:
    "Discover effective strategies for training healthcare employees on IT security to create a strong first line of defense against cyber threats.",
  keywords:
    "healthcare security training, medical staff cybersecurity, HIPAA training, security awareness, healthcare IT training",
  openGraph: {
    title: "IT Staff Training: Building a Security-Conscious Medical Team | IT Launch",
    description:
      "Discover effective strategies for training healthcare employees on IT security to create a strong first line of defense against cyber threats.",
    url: "https://itlaunchsolutions.com/blog/security-training-medical-staff",
    siteName: "IT Launch Solutions",
    images: [
      {
        url: "https://itlaunchsolutions.com/images/train.png",
        width: 1200,
        height: 630,
        alt: "IT security training for medical staff",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Staff Training: Building a Security-Conscious Medical Team | IT Launch",
    description:
      "Discover effective strategies for training healthcare employees on IT security to create a strong first line of defense against cyber threats.",
    images: ["https://itlaunchsolutions.com/images/train.png"],
    creator: "@itlaunchsolutions",
  },
}

export default function SecurityTrainingMedicalStaffPage() {
  return <SecurityTrainingMedicalStaffClient />
}
