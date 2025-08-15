import type { Project } from "./type";

export const projects: Project[] = [
  {
    id: "bjegokay",
    title: "Частный дом в Бжегокае",
    description: "Монтаж ПВХ мембраны и установка системы водоотведения",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в селе Бжегокай. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "flat-roof",
    location: "Краснодар",
    year: 2022,
    area: 100,
    status: "completed",
    mainImage: "/projects/bjegokay/after.jpg",
    beforeAfter: {
      before: "/projects/bjegokay/step-1.jpg",
      after: "/projects/bjegokay/after.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: "/projects/bjegokay/step-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: "/projects/bjegokay/step-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: "/projects/bjegokay/step-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/bjegokay/step-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/bjegokay/after.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["ivanovskaya", "frunze"]
  },
  {
    id: "frunze",
    title: "Частный дом в Фрунзе",
    description: "Монтаж ПВХ мембраны",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в селе Фрунзе. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "flat-roof",
    location: "Краснодар",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/frunze/frunze-5.jpg",
    beforeAfter: {
      before: "/projects/frunze/frunze-1.jpg",
      after: "/projects/frunze/frunze-5.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: "/projects/frunze/frunze-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: "/projects/frunze/frunze-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: "/projects/frunze/frunze-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/frunze/frunze-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/frunze/frunze-5.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["ivanovskaya", "bjegokay"]
  },
  {
    id: "ivanovskaya",
    title: "Частный дом в Ивановской",
    description: "Монтаж ПВХ мембраны",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в станице Ивановской. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "flat-roof",
    location: "Краснодар",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/ivanovskaya/ivanovskaya-8.jpg",
    beforeAfter: {
      before: "/projects/ivanovskaya/ivanovskaya-1.jpg",
      after: "/projects/ivanovskaya/ivanovskaya-8.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: "/projects/ivanovskaya/ivanovskaya-2.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: "/projects/ivanovskaya/ivanovskaya-3.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: "/projects/ivanovskaya/ivanovskaya-4.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/ivanovskaya/ivanovskaya-6.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Финальный вид кровли",
        description: "Так выглядит кровля после окончания работ.",
        imageUrl: "/projects/ivanovskaya/ivanovskaya-7.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",

      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["frunze", "bjegokay"]
  },
  {
    id: "voronegskaya",
    title: "Частный дом в Воронежской",
    description: "Монтаж ПВХ мембраны",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в станице Воронежской. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "flat-roof",
    location: "Краснодар",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/voronegskaya/voronegskaya-5.jpg",
    beforeAfter: {
      before: "/projects/voronegskaya/voronegskaya-1.jpg",
      after: "/projects/voronegskaya/voronegskaya-5.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: "/projects/voronegskaya/voronegskaya-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: "/projects/voronegskaya/voronegskaya-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: "/projects/voronegskaya/voronegskaya-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/voronegskaya/voronegskaya-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/voronegskaya/voronegskaya-5.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["ivanovskaya", "frunze"]
  },
  {
    id: "gallery",
    title: "MEGA адыгея",
    description: "Ремонт кровли",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по ремонту кровли ТЦ MEGA. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил качественный ремонт сложных кровельных узлов."
    ],
    category: "roof-repair",
    location: "Краснодар",
    year: 2017,
    area: 200,
    status: "completed",
    mainImage: "/projects/gallery/gallery-4.jpg",
    beforeAfter: {
      before: "/projects/gallery/gallery-0.jpg",
      after: "/projects/gallery/gallery-4.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровельном покрытии застарелая грязь и лужи, что означает постоянное скопление воды в этом месте.",
        imageUrl: "/projects/gallery/gallery-0.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Монтаж утеплителя",
        description: "Убрали мусор, демонтировали покрытие, смонтировали утеплитель.",
        imageUrl: "/projects/gallery/gallery-1.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/gallery/gallery-2.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Устройство примыканий",
        description: "95% работы сделано.",
        imageUrl: "/projects/gallery/gallery-3.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид гидроизолированных узлов.",
        imageUrl: "/projects/gallery/gallery-4.jpg",
        completed: true
      },
      {
        id: 6,
        title: "Устройство примыканий",
        description: "Такой вид имеют решения, которые не работают",
        imageUrl: "/projects/gallery/gallery-5.jpg",
        completed: true
      },
      {
        id: 7,
        title: "Устройство примыканий",
        description: "Аккуратное гидроизолирование проблемного места.",
        imageUrl: "/projects/gallery/gallery-6.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Профнастил",
      insulation: "Каменная вата",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "5 дней",
      warranty: "5 лет"
    }
  },
  {
    id: "elizavetka",
    title: "Частный дом в Елизаветинской",
    description: "Монтаж ПВХ мембраны",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в станице Елизаветинской. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "flat-roof",
    location: "Краснодар",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/elizavetka/elizavetka-5.jpg",
    beforeAfter: {
      before: "/projects/elizavetka/elizavetka-1.jpg",
      after: "/projects/elizavetka/elizavetka-5.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: "/projects/elizavetka/elizavetka-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: "/projects/elizavetka/elizavetka-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронок.",
        imageUrl: "/projects/elizavetka/elizavetka-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/elizavetka/elizavetka-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/elizavetka/elizavetka-6.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["ivanovskaya", "meridian"]
  },
  {
    id: "guzeripl",
    title: "Частный дом в Гузерипле",
    description: "Укладка ПВХ мембраны",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в посёлке Гузерипль. Проект включал в себя подготовку основания и монтаж гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "pvc-membrane",
    location: "Краснодар",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/guzeripl/guzeripl-7.jpg",
    beforeAfter: {
      before: "/projects/guzeripl/guzeripl-1.jpg",
      after: "/projects/guzeripl/guzeripl-7.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "Так выглядит кровля до начала работ.",
        imageUrl: "/projects/guzeripl/guzeripl-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Очистили поверхность и произвели укладку геотекстиля.",
        imageUrl: "/projects/guzeripl/guzeripl-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/guzeripl/guzeripl-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Гидроизоляция узлов",
        description: "Герметизация систем кровельных коммуникаций.",
        imageUrl: "/projects/guzeripl/guzeripl-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/guzeripl/guzeripl-7.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская эксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "-",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "-",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["kp_avstria"]
  },
  {
    id: "kp_avstria",
    title: 'Частный дом в КП "Австрия"',
    description: "Укладка ПВХ мембраны",
    fullDescription: [
      'Компания SOLID ROOF выполнила полный комплекс работ по устройству плоской кровли частного дома в коттеджном посёлке "Австрия".  Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.',
      "В результате заказчик получил надежную и долговечную кровельную систему с полной гидроизоляцией."
    ],
    category: "pvc-membrane",
    location: "Краснодарский край",
    year: 2021,
    area: 120,
    status: "completed",
    mainImage: "/projects/kp_avstria/austria-7.jpg",
    beforeAfter: {
      before: "/projects/kp_avstria/austria-1.jpg",
      after: "/projects/kp_avstria/austria-7.jpg"
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "Так выглядит кровля до начала работ.",
        imageUrl: "/projects/kp_avstria/austria-1.jpg",
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убираем строительный мусор с кровли и видим застойные зоны.",
        imageUrl: "/projects/kp_avstria/austria-2.jpg",
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "кладка и закрепление утеплителя, установка воронок.",
        imageUrl: "/projects/kp_avstria/austria-3.jpg",
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: "/projects/kp_avstria/austria-4.jpg",
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: "/projects/kp_avstria/austria-7.jpg",
        completed: true
      }
    ],
    specifications: {
      roofType: "Плоская неэксплуатируемая",
      base: "Бетонная стяжка",
      insulation: "ПЕНОПЛЭКС 30",
      separatorLayer: "Геотекстиль 200 г/м²",
      waterproofing: "ПВХ мембрана Logicroof V-SR",
      insulationThickness: "120 мм",
      duration: "20 дней",
      warranty: "5 лет"
    },
    similarProjects: ["guzeripl"]
  }
];
