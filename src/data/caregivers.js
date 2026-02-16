export const caregivers = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Registered Nurse",
        experience: "8 yrs exp.",
        rating: "4.9",
        location: "Austin, TX",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc3bSO95iwodgnaI7tzBcSaDwP6RYhKtIzB5JRuitQhxewA7DshGNUHaHyYxNP3ETlB32av4YByMmeg-afIRuvJ9GiZ5YfZBD50ynKQykAiOMmqVReTZXLZNdg5pmonrzkikI63GKuosYHICrs1R9QD2u13OV-VZjWq_CyyDRgdOcsaEsFV6HrNlRWMmu88l8Oc8X3AI_jnKD9v8Ui2qTj4U2OK3o5JNpVg56hREEW-biWGjolr17AWrIHIESExL08ON7wKsDmOXlm",
        bio: "Compassionate registered nurse with 8 years of experience in senior care. Specialized in post-operative care and chronic disease management.",
        skills: ["Senior Care", "Post-Op", "Medication Management", "Dementia Care"],
        hourlyRate: 45,
        availability: "Mon-Fri, 8am-6pm"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Senior Companion",
        experience: "5 yrs exp.",
        rating: "4.8",
        location: "Round Rock, TX",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRGIUZIu3SMv_yu-3XeneS4oz30QC_JbNCouLNHikKh5Z-Z0pNKeL82LdVjzExihPbFM2XDeCUNvppw9VbpWh25ZpI-uJm3WThcjRptVA6r3Sqpq3ApeX3pBwYo7KTKK1ytTu_tlOxteUWxsFSjRBkY4cugVJ0KiPu4RXOogPdOGg01RCPT2fKyZMmm10qKWnH2E6coMQULgzPl1eyLxF08LQtRcJ_E9mg9fQwfh8rJeEGjAWMYomshsZ6lRbm7mXE1rieOyOWKRnq",
        bio: "Dedicated senior companion providing emotional support and daily living assistance. Fluent in English and Mandarin.",
        skills: ["Senior Care", "Companionship", "Light Housekeeping", "Meal Preparation"],
        hourlyRate: 30,
        availability: "Flexible schedule"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Child Care Specialist",
        experience: "4 yrs exp.",
        rating: "5.0",
        location: "Cedar Park, TX",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ujjdnkSWpdWhHh8kBYSCrL34c3zJ15epuEzEFasEdcgCJfStVK6tt4O_IBcfyRgHxxe3e7mJ9zwSuhruFGvCMQJWAh0ibk5iKNFLLCxWk8fhq4l9VJtLF21IriJw4S3PtHk-FSJ8At4aWTohII9oc4aE6FKaDDpkxbKGDz8jRbEx1JHe3diNuYDaUqYaXSyc5DXIVOFEhoMxTMCf8_vnsHY8o7CDd-QFOJACA9hgNbMPMwAShGBcAw02qarNWVCEjo9y-OiVOb6d",
        bio: "Early childhood educator with a passion for nurturing young minds. CPR and First Aid certified.",
        skills: ["Child Care", "Educational Activities", "Special Needs", "Infant Care"],
        hourlyRate: 28,
        availability: "Weekdays, 7am-7pm"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Physical Therapist Assistant",
        experience: "6 yrs exp.",
        rating: "4.9",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        bio: "Licensed PTA specializing in rehabilitation and mobility assistance for seniors and post-surgery patients.",
        skills: ["Post-Op", "Physical Therapy", "Mobility Assistance", "Senior Care"],
        hourlyRate: 50,
        availability: "Mon-Sat, 9am-5pm"
    },
    {
        id: 5,
        name: "Maria Santos",
        role: "Home Health Aide",
        experience: "7 yrs exp.",
        rating: "4.7",
        location: "Pflugerville, TX",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
        bio: "Experienced home health aide providing comprehensive personal care and household support.",
        skills: ["Senior Care", "Personal Care", "Housekeeping", "Meal Preparation"],
        hourlyRate: 32,
        availability: "7 days a week"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Special Needs Caregiver",
        experience: "5 yrs exp.",
        rating: "5.0",
        location: "Georgetown, TX",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Compassionate caregiver specializing in autism spectrum and developmental disabilities support.",
        skills: ["Special Needs", "Behavioral Support", "Life Skills Training", "Respite Care"],
        hourlyRate: 38,
        availability: "Flexible, including weekends"
    }
];

export const services = [
    {
        id: "senior-care",
        icon: "elderly",
        title: "Senior Care",
        description: "Daily living assistance & companionship",
        details:
            "Our Senior Care service provides compassionate daily assistance, companionship, medication reminders, and mobility support for elderly loved ones."
    },
    {
        id: "child-care",
        icon: "child_care",
        title: "Child Care",
        description: "Safe, fun & educational childcare",
        details:
            "Trusted caregivers ensure a safe, fun, and nurturing environment for your children with age-appropriate activities."
    },
    {
        id: "special-needs",
        icon: "accessible_forward",
        title: "Special Needs",
        description: "Specialized support for all abilities",
        details:
            "Personalized care plans designed for individuals with physical or developmental challenges."
    },
    {
        id: "housekeeping",
        icon: "cleaning_services",
        title: "Housekeeping",
        description: "Home maintenance & cleaning",
        details:
            "Professional housekeeping services to keep your home clean, organized, and stress-free."
    },
    {
        id: "respite-care",
        icon: "favorite",
        title: "Respite Care",
        description: "Temporary relief for family caregivers",
        details:
            "Short-term care that gives family caregivers time to rest and recharge."
    },
    {
        id: "post-op-care",
        icon: "medical_services",
        title: "Post-Op Care",
        description: "Recovery assistance after surgery",
        details:
            "Post-surgery support including mobility assistance, wound care, and recovery monitoring."
    }
];

