import type { Project } from "./type";

import bjegokayAfterImg from '@/assets/projects/bjegokay/after.jpg';
import bjegokayFirstImg from '@/assets/projects/bjegokay/step-1.jpg';
import bjegokaySecondImg from '@/assets/projects/bjegokay/step-2.jpg';
import bjegokayThirdImg from '@/assets/projects/bjegokay/step-3.jpg';
import bjegokayFourthImg from '@/assets/projects/bjegokay/step-4.jpg';


import frunzeFirstImg from '@/assets/projects/frunze/frunze-1.jpg';
import frunzeSecondImg from '@/assets/projects/frunze/frunze-2.jpg';
import frunzeThirdImg from '@/assets/projects/frunze/frunze-3.jpg';
import frunzeFourthImg from '@/assets/projects/frunze/frunze-4.jpg';
import frunzeFifthImg from '@/assets/projects/frunze/frunze-5.jpg';

import ivanovskayaFirstImg from '@/assets/projects/ivanovskaya/ivanovskaya-1.jpg';
import ivanovskayaSecondImg from '@/assets/projects/ivanovskaya/ivanovskaya-2.jpg';
import ivanovskayaThirdImg from '@/assets/projects/ivanovskaya/ivanovskaya-3.jpg';
import ivanovskayaFourthImg from '@/assets/projects/ivanovskaya/ivanovskaya-4.jpg';
import ivanovskayaFifthImg from '@/assets/projects/ivanovskaya/ivanovskaya-6.jpg';
import ivanovskayaSixthImg from '@/assets/projects/ivanovskaya/ivanovskaya-7.jpg';
import ivanovskayaSeventhImg from '@/assets/projects/ivanovskaya/ivanovskaya-8.jpg';

import voronegskayaFirstImg from '@/assets/projects/voronegskaya/voronegskaya-1.jpg';
import voronegskayaSecondImg from '@/assets/projects/voronegskaya/voronegskaya-2.jpg';
import voronegskayaThirdImg from '@/assets/projects/voronegskaya/voronegskaya-3.jpg';
import voronegskayaFourthImg from '@/assets/projects/voronegskaya/voronegskaya-4.jpg';
import voronegskayaFifthImg from '@/assets/projects/voronegskaya/voronegskaya-5.jpg';

import galleryZerosImg from '@/assets/projects/gallery/gallery-0.jpg';
import galleryFirstImg from '@/assets/projects/gallery/gallery-1.jpg';
import gallerySecondImg from '@/assets/projects/gallery/gallery-2.jpg';
import galleryThirdImg from '@/assets/projects/gallery/gallery-3.jpg';
import galleryFourthImg from '@/assets/projects/gallery/gallery-4.jpg';
import galleryFifthImg from '@/assets/projects/gallery/gallery-5.jpg';
import gallerySixthImg from '@/assets/projects/gallery/gallery-6.jpg';

import elizavetkaFirstImg from '@/assets/projects/elizavetka/elizavetka-1.jpg';
import elizavetkaSecondImg from '@/assets/projects/elizavetka/elizavetka-2.jpg';
import elizavetkaThirdImg from '@/assets/projects/elizavetka/elizavetka-3.jpg';
import elizavetkaFourthImg from '@/assets/projects/elizavetka/elizavetka-4.jpg';
import elizavetkaFifthImg from '@/assets/projects/elizavetka/elizavetka-5.jpg';
import elizavetkaSixthImg from '@/assets/projects/elizavetka/elizavetka-6.jpg';

import guzeriplFirstImg from '@/assets/projects/guzeripl/guzeripl-1.jpg';
import guzeriplSecondImg from '@/assets/projects/guzeripl/guzeripl-2.jpg';
import guzeriplThirdImg from '@/assets/projects/guzeripl/guzeripl-3.jpg';
import guzeriplFourthImg from '@/assets/projects/guzeripl/guzeripl-4.jpg';
import guzeriplSeventhImg from '@/assets/projects/guzeripl/guzeripl-7.jpg';

import kpAvstriaFirstImg from '@/assets/projects/kp_avstria/austria-1.jpg';
import kpAvstriaSecondImg from '@/assets/projects/kp_avstria/austria-2.jpg';
import kpAvstriaThirdImg from '@/assets/projects/kp_avstria/austria-3.jpg';
import kpAvstriaFourthImg from '@/assets/projects/kp_avstria/austria-4.jpg';
import kpAvstriaSeventhImg from '@/assets/projects/kp_avstria/austria-7.jpg';

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
    mainImage: bjegokayAfterImg,
    beforeAfter: {
      before: bjegokayFirstImg,
      after: bjegokayAfterImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: bjegokayFirstImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: bjegokaySecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: bjegokayThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: bjegokayFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: bjegokayAfterImg,
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
    mainImage: frunzeFifthImg,
    beforeAfter: {
      before: frunzeFirstImg,
      after: frunzeFifthImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: frunzeFirstImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: frunzeSecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: frunzeThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: frunzeFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: frunzeFifthImg,
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
    mainImage: ivanovskayaSeventhImg,
    beforeAfter: {
      before: ivanovskayaFirstImg,
      after: ivanovskayaSeventhImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: ivanovskayaSecondImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: ivanovskayaThirdImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: ivanovskayaFourthImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: ivanovskayaFifthImg,
        completed: true
      },
      {
        id: 5,
        title: "Финальный вид кровли",
        description: "Так выглядит кровля после окончания работ.",
        imageUrl: ivanovskayaSixthImg,
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
    mainImage: voronegskayaFifthImg,
    beforeAfter: {
      before: voronegskayaFirstImg,
      after: voronegskayaFifthImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: voronegskayaFirstImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: voronegskayaSecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронки.",
        imageUrl: voronegskayaThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: voronegskayaFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: voronegskayaFifthImg,
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
    title: "ТРЦ Галерея",
    description: "Ремонт кровли",
    fullDescription: [
      "Компания SOLID ROOF выполнила полный комплекс работ по ремонту кровли ТРЦ Галерея. Проект включал в себя подготовку основания, монтаж утеплителя и гидроизоляционного слоя из ПВХ мембраны.",
      "В результате заказчик получил качественный ремонт сложных кровельных узлов."
    ],
    category: "roof-repair",
    location: "Краснодар",
    year: 2017,
    area: 200,
    status: "completed",
    mainImage:  galleryFourthImg,
    beforeAfter: {
      before: galleryZerosImg,
      after:  galleryFourthImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровельном покрытии застарелая грязь и лужи, что означает постоянное скопление воды в этом месте.",
        imageUrl: galleryZerosImg,
        completed: true
      },
      {
        id: 2,
        title: "Монтаж утеплителя",
        description: "Убрали мусор, демонтировали покрытие, смонтировали утеплитель.",
        imageUrl: galleryFirstImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: gallerySecondImg,
        completed: true
      },
      {
        id: 4,
        title: "Устройство примыканий",
        description: "95% работы сделано.",
        imageUrl:  galleryThirdImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид гидроизолированных узлов.",
        imageUrl:  galleryFourthImg,
        completed: true
      },
      {
        id: 6,
        title: "Устройство примыканий",
        description: "Такой вид имеют решения, которые не работают",
        imageUrl:  galleryFifthImg,
        completed: true
      },
      {
        id: 7,
        title: "Устройство примыканий",
        description: "Аккуратное гидроизолирование проблемного места.",
        imageUrl: gallerySixthImg,
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
    mainImage: elizavetkaFifthImg,
    beforeAfter: {
      before: elizavetkaFirstImg,
      after: elizavetkaFifthImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "На кровле строительный мусор и неровности.",
        imageUrl: elizavetkaFirstImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убрали мусор, очистили основание, выровняли поверхность.",
        imageUrl: elizavetkaSecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "Укладка и закрепление утеплителя, установка воронок.",
        imageUrl: elizavetkaThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: elizavetkaFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: elizavetkaSixthImg,
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
    mainImage: guzeriplSeventhImg,
    beforeAfter: {
      before: guzeriplFirstImg,
      after: guzeriplSeventhImg
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "Так выглядит кровля до начала работ.",
        imageUrl:guzeriplFirstImg ,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Очистили поверхность и произвели укладку геотекстиля.",
        imageUrl: guzeriplSecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: guzeriplThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Гидроизоляция узлов",
        description: "Герметизация систем кровельных коммуникаций.",
        imageUrl: guzeriplFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl: guzeriplSeventhImg,
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
    mainImage:  kpAvstriaSeventhImg ,
    beforeAfter: {
      before: kpAvstriaFirstImg,
      after:  kpAvstriaSeventhImg 
    },
    stages: [
      {
        id: 1,
        title: "Начальное состояние",
        description: "Так выглядит кровля до начала работ.",
        imageUrl: kpAvstriaFirstImg,
        completed: true
      },
      {
        id: 2,
        title: "Подготовка основания",
        description: "Убираем строительный мусор с кровли и видим застойные зоны.",
        imageUrl: kpAvstriaSecondImg,
        completed: true
      },
      {
        id: 3,
        title: "Монтаж утеплителя",
        description: "кладка и закрепление утеплителя, установка воронок.",
        imageUrl: kpAvstriaThirdImg,
        completed: true
      },
      {
        id: 4,
        title: "Монтаж ПВХ мембраны",
        description: "Укладка и сварка ПВХ мембраны с обеспечением герметичности.",
        imageUrl: kpAvstriaFourthImg,
        completed: true
      },
      {
        id: 5,
        title: "Устройство примыканий",
        description: "Финальный вид кровельного покрытия.",
        imageUrl:  kpAvstriaSeventhImg,
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
