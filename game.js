const MONTH_SECONDS = 30;
const RANKING_KEY = "imperio_clicker_ranking_v1";
const DEVICE_AUTOSAVE_KEY = "imperio_clicker_device_autosave_v1";
const ADMIN_ACCESS = "admin";
const ADMIN_PASSWORD = "Nub@2026";
const ADMIN_MAX_ADVANCE_MONTHS = 120;
const FARM_HECTARE_PRICE = 90000;
const FARM_YIELD_PCT = 0.012;
const COMPANY_MARGIN_OPTIONS = [
  { label: "Conservador", mult: 0.9 },
  { label: "Equilibrado", mult: 1 },
  { label: "Agressivo", mult: 1.12 },
  { label: "Premium", mult: 1.25 }
];
const GPU_CAPACITY_PER_UNIT = 20;
const FRANCHISE_SALE_PRICE = 200000;
const FRANCHISE_ANNUAL_REVENUE = 250000;
const FRANCHISE_ROYALTY_RATE = 0.08;
const FRANCHISE_MONTHLY_ROYALTY = (FRANCHISE_ANNUAL_REVENUE * FRANCHISE_ROYALTY_RATE) / 12;

const franchiseSegments = [
  { id: "alimentacao", nome: "Alimentacao", setupCost: 350000, minSales: 1, maxSales: 4, annualGrowth: 0.11 },
  { id: "beleza", nome: "Beleza e estetica", setupCost: 500000, minSales: 1, maxSales: 3, annualGrowth: 0.12 },
  { id: "educacao", nome: "Educacao", setupCost: 650000, minSales: 1, maxSales: 3, annualGrowth: 0.13 },
  { id: "tecnologia", nome: "Tecnologia", setupCost: 900000, minSales: 0, maxSales: 2, annualGrowth: 0.16 },
  { id: "saude", nome: "Saude", setupCost: 1200000, minSales: 0, maxSales: 2, annualGrowth: 0.14 }
];

const cryptoCoinsCatalog = [
  { id: "BTC", nome: "Bitcoin", priceUsd: 68000, min: 42000, max: 120000, yieldPerMhSecond: 0.00000018 },
  { id: "ETH", nome: "Ethereum", priceUsd: 3200, min: 1400, max: 6500, yieldPerMhSecond: 0.0000032 },
  { id: "SOL", nome: "Solana", priceUsd: 140, min: 55, max: 380, yieldPerMhSecond: 0.00008 }
];

const cryptoMiningSpacesCatalog = [
  { id: "garage_rig", nome: "Garage adaptado", baseCost: 180000, capacityUnits: 1, powerFeeMonthly: 600 },
  { id: "office_rig", nome: "Escritorio tecnico", baseCost: 750000, capacityUnits: 2, powerFeeMonthly: 1700 },
  { id: "datacenter_rig", nome: "Mini datacenter", baseCost: 2300000, capacityUnits: 5, powerFeeMonthly: 3900 }
];

const cryptoGpuCatalog = [
  { id: "rtx_4060", nome: "NVIDIA RTX 4060", price: 18900, hashMh: 32, watts: 115 },
  { id: "rtx_4070_ti", nome: "NVIDIA RTX 4070 Ti Super", price: 48900, hashMh: 62, watts: 285 },
  { id: "rtx_4090", nome: "NVIDIA RTX 4090", price: 94900, hashMh: 120, watts: 450 }
];

const upgrades = [
  { id: "mouse", nome: "Mouse turbo", baseCost: 120, add: 8, level: 0 },
  { id: "teclado", nome: "Teclado rapido", baseCost: 800, add: 40, level: 0 },
  { id: "studio", nome: "Studio digital", baseCost: 4500, add: 180, level: 0 },
  { id: "agencia", nome: "Agencia de cliques", baseCost: 18000, add: 700, level: 0 },
  { id: "ia", nome: "Automacao IA", baseCost: 72000, add: 2800, level: 0 }
];

const companies = [
  { id: "quiosque", nome: "Quiosque", setor: "Varejo", baseCost: 50000, baseIncome: 2500, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "cafeteria", nome: "Cafeteria", setor: "Alimentos", baseCost: 150000, baseIncome: 6500, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "mercado", nome: "Mini mercado", setor: "Varejo", baseCost: 350000, baseIncome: 14000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "academia", nome: "Academia", setor: "Servicos", baseCost: 600000, baseIncome: 23000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "agencia_marketing", nome: "Agencia de marketing", setor: "Digital", baseCost: 900000, baseIncome: 33000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "startup", nome: "Startup", setor: "Tecnologia", baseCost: 1400000, baseIncome: 50000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "fabrica", nome: "Fabrica", setor: "Industria", baseCost: 3000000, baseIncome: 100000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "rede_hoteis", nome: "Rede de hoteis", setor: "Turismo", baseCost: 7000000, baseIncome: 210000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "fintech", nome: "Fintech", setor: "Financeiro", baseCost: 15000000, baseIncome: 420000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "holding", nome: "Holding global", setor: "Conglomerado", baseCost: 35000000, baseIncome: 900000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "ecommerce", nome: "E-commerce nacional", setor: "Digital", baseCost: 65000000, baseIncome: 1600000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "logistica", nome: "Operadora logistica", setor: "Industria", baseCost: 95000000, baseIncome: 2300000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "construtora", nome: "Construtora urbana", setor: "Industria", baseCost: 140000000, baseIncome: 3300000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "rede_hospitais", nome: "Rede de hospitais", setor: "Servicos", baseCost: 220000000, baseIncome: 5200000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "telecom", nome: "Operadora telecom", setor: "Tecnologia", baseCost: 320000000, baseIncome: 7600000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "energia", nome: "Geradora de energia", setor: "Industria", baseCost: 500000000, baseIncome: 12200000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "biotech", nome: "Biotech farmaceutica", setor: "Tecnologia", baseCost: 780000000, baseIncome: 19000000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 },
  { id: "banco_investimentos", nome: "Banco de investimentos", setor: "Financeiro", baseCost: 1200000000, baseIncome: 30000000, owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 }
];

const initialUpgradeBase = upgrades.map((u) => ({ id: u.id, baseCost: u.baseCost }));
const initialCompanyBase = companies.map((c) => ({ id: c.id, baseCost: c.baseCost, baseIncome: c.baseIncome }));

const realEstateCatalog = [
  { id: "casa_campinas_swiss", tipo: "casa", nome: "Casa terrea em condominio", localizacao: "Campinas, SP", valor: 420000, aluguelMensal: 1900 },
  { id: "casa_sjc_jardins", tipo: "casa", nome: "Casa 3 quartos", localizacao: "Sao Jose dos Campos, SP", valor: 510000, aluguelMensal: 2300 },
  { id: "casa_curitiba_uberaba", tipo: "casa", nome: "Casa familiar com quintal", localizacao: "Curitiba, PR", valor: 560000, aluguelMensal: 2500 },
  { id: "casa_bh_pampulha", tipo: "casa", nome: "Casa padrao alto", localizacao: "Belo Horizonte, MG", valor: 690000, aluguelMensal: 3100 },
  { id: "casa_floripa_lagoa", tipo: "casa", nome: "Casa proxima a praia", localizacao: "Florianopolis, SC", valor: 840000, aluguelMensal: 3800 },
  { id: "casa_niteroi_icarai", tipo: "casa", nome: "Casa duplex urbana", localizacao: "Niteroi, RJ", valor: 980000, aluguelMensal: 4500 },
  { id: "casa_brasilia_lago", tipo: "casa", nome: "Casa de alto padrao", localizacao: "Brasilia, DF", valor: 1450000, aluguelMensal: 6500 },
  { id: "casa_sp_morumbi", tipo: "casa", nome: "Casa condominio premium", localizacao: "Sao Paulo, SP", valor: 2300000, aluguelMensal: 9800 },
  { id: "casa_rio_barra", tipo: "casa", nome: "Casa de luxo", localizacao: "Rio de Janeiro, RJ", valor: 3200000, aluguelMensal: 12800 },
  { id: "casa_angra_marina", tipo: "casa", nome: "Casa de veraneio", localizacao: "Angra dos Reis, RJ", valor: 4800000, aluguelMensal: 18500 },
  { id: "casa_trancoso_vila", tipo: "casa", nome: "Casa praia boutique", localizacao: "Trancoso, BA", valor: 6200000, aluguelMensal: 23500 },
  { id: "casa_sp_jardins", tipo: "casa", nome: "Mansao urbana", localizacao: "Sao Paulo, SP", valor: 8900000, aluguelMensal: 33500 },
  { id: "predio_campinas_6", tipo: "predio", nome: "Predio residencial 6 andares", localizacao: "Campinas, SP", valor: 11000000, aluguelMensal: 62000 },
  { id: "predio_santoandre_8", tipo: "predio", nome: "Predio misto 8 andares", localizacao: "Santo Andre, SP", valor: 14500000, aluguelMensal: 81000 },
  { id: "predio_curitiba_10", tipo: "predio", nome: "Predio corporativo", localizacao: "Curitiba, PR", valor: 18500000, aluguelMensal: 102000 },
  { id: "predio_bh_savassi", tipo: "predio", nome: "Predio comercial prime", localizacao: "Belo Horizonte, MG", valor: 23000000, aluguelMensal: 125000 },
  { id: "predio_recife_boaviagem", tipo: "predio", nome: "Predio residencial litoral", localizacao: "Recife, PE", valor: 28500000, aluguelMensal: 154000 },
  { id: "predio_fortaleza_meireles", tipo: "predio", nome: "Predio de locacao longa", localizacao: "Fortaleza, CE", valor: 34000000, aluguelMensal: 184000 },
  { id: "predio_portoalegre_moinhos", tipo: "predio", nome: "Predio classe A", localizacao: "Porto Alegre, RS", valor: 41000000, aluguelMensal: 221000 },
  { id: "predio_goiania_setoroeste", tipo: "predio", nome: "Predio residencial premium", localizacao: "Goiania, GO", valor: 49000000, aluguelMensal: 264000 },
  { id: "predio_salvador_orla", tipo: "predio", nome: "Predio vista mar", localizacao: "Salvador, BA", valor: 58000000, aluguelMensal: 312000 },
  { id: "predio_brasilia_comercial", tipo: "predio", nome: "Predio comercial central", localizacao: "Brasilia, DF", valor: 69000000, aluguelMensal: 368000 },
  { id: "predio_niteroi_centro", tipo: "predio", nome: "Predio multifuncional", localizacao: "Niteroi, RJ", valor: 81000000, aluguelMensal: 430000 },
  { id: "predio_sp_marginal", tipo: "predio", nome: "Torre empresarial", localizacao: "Sao Paulo, SP", valor: 98000000, aluguelMensal: 515000 },
  { id: "predio_rio_portomaravilha", tipo: "predio", nome: "Torre corporativa", localizacao: "Rio de Janeiro, RJ", valor: 118000000, aluguelMensal: 618000 },
  { id: "predio_sp_faria_lima", tipo: "predio", nome: "Predio AAA", localizacao: "Sao Paulo, SP", valor: 145000000, aluguelMensal: 754000 },
  { id: "predio_sp_berrini", tipo: "predio", nome: "Complexo comercial", localizacao: "Sao Paulo, SP", valor: 180000000, aluguelMensal: 936000 },
  { id: "predio_sp_paulista", tipo: "predio", nome: "Edificio corporativo premium", localizacao: "Sao Paulo, SP", valor: 220000000, aluguelMensal: 1144000 },
  { id: "predio_sp_pinheiros", tipo: "predio", nome: "Portifolio residencial", localizacao: "Sao Paulo, SP", valor: 270000000, aluguelMensal: 1404000 },
  { id: "predio_sp_centrofinanceiro", tipo: "predio", nome: "Mega torre financeira", localizacao: "Sao Paulo, SP", valor: 340000000, aluguelMensal: 1768000 },
  { id: "condominio_miami_luxo", tipo: "predio", nome: "Condominio luxuoso waterfront", localizacao: "Miami, EUA (valor convertido para BRL)", valor: 980000000, aluguelMensal: 5100000 }
];

const farmInvestments = [
  { id: "irrigacao", nome: "Irrigacao inteligente", baseCost: 180000, bonus: 0.08 },
  { id: "armazenagem", nome: "Armazenagem e silos", baseCost: 320000, bonus: 0.1 },
  { id: "maquinario", nome: "Maquinario moderno", baseCost: 520000, bonus: 0.14 },
  { id: "tecnologia", nome: "Agro 4.0 e sensores", baseCost: 760000, bonus: 0.18 }
];

const cattleCatalog = [
  { id: "boi", nome: "Boi (padrao)", buy: 9000, sell: 13500 }
];

const participationCatalog = [
  { id: "petrobras", nome: "Petrobras", ticker: "PETR4", setor: "Energia", baseValuation: 7800000, growthAnnual: 0.1, volatility: 0.028, payoutAnnual: 0.09 },
  { id: "vale", nome: "Vale", ticker: "VALE3", setor: "Mineracao", baseValuation: 5600000, growthAnnual: 0.08, volatility: 0.024, payoutAnnual: 0.08 },
  { id: "itau", nome: "Itau Unibanco", ticker: "ITUB4", setor: "Financeiro", baseValuation: 6100000, growthAnnual: 0.085, volatility: 0.018, payoutAnnual: 0.07 },
  { id: "ambev", nome: "Ambev", ticker: "ABEV3", setor: "Bebidas", baseValuation: 4200000, growthAnnual: 0.07, volatility: 0.017, payoutAnnual: 0.06 },
  { id: "weg", nome: "WEG", ticker: "WEGE3", setor: "Industria", baseValuation: 3900000, growthAnnual: 0.12, volatility: 0.022, payoutAnnual: 0.035 },
  { id: "magalu", nome: "Magazine Luiza", ticker: "MGLU3", setor: "Varejo", baseValuation: 1100000, growthAnnual: 0.13, volatility: 0.035, payoutAnnual: 0.015 },
  { id: "nubank", nome: "Nubank", ticker: "NU", setor: "Fintech", baseValuation: 8500000, growthAnnual: 0.14, volatility: 0.03, payoutAnnual: 0.02 }
];

const worldBillionaires = [
  { id: "elon_musk", nome: "Elon Musk", usdBillion: 342 },
  { id: "mark_zuckerberg", nome: "Mark Zuckerberg", usdBillion: 216 },
  { id: "jeff_bezos", nome: "Jeff Bezos", usdBillion: 215 },
  { id: "larry_ellison", nome: "Larry Ellison", usdBillion: 192 },
  { id: "bernard_arnault", nome: "Bernard Arnault & family", usdBillion: 178 }
];

const carCatalog = [
  { id: "fiat_mobi", nome: "Fiat Mobi Like", price: 76990 },
  { id: "renault_kwid", nome: "Renault Kwid Zen", price: 76999 },
  { id: "chevrolet_onix", nome: "Chevrolet Onix 1.0 MT", price: 93430 },
  { id: "hyundai_hb20", nome: "Hyundai HB20 Sense", price: 95790 },
  { id: "vw_polo", nome: "Volkswagen Polo Track", price: 96290 },
  { id: "fiat_argo", nome: "Fiat Argo 1.0", price: 89990 },
  { id: "vw_tcross", nome: "Volkswagen T-Cross 200 TSI", price: 119990 },
  { id: "honda_hrv", nome: "Honda HR-V EX", price: 156100 },
  { id: "toyota_corolla", nome: "Toyota Corolla GLi", price: 158490 },
  { id: "toyota_corolla_cross", nome: "Toyota Corolla Cross XR", price: 179190 },
  { id: "jeep_compass", nome: "Jeep Compass Sport", price: 186990 },
  { id: "byd_dolphin_mini", nome: "BYD Dolphin Mini", price: 115800 },
  { id: "byd_song_pro", nome: "BYD Song Pro", price: 189800 },
  { id: "gwm_haval_h6", nome: "GWM Haval H6 HEV2", price: 219000 },
  { id: "honda_civic", nome: "Honda Civic Advanced Hybrid", price: 265900 },
  { id: "mercedes_amg_s63", nome: "Mercedes-AMG S63 E-Performance", price: 1600000 },
  { id: "bmw_i7_xdrive60", nome: "BMW i7 xDrive60 M Sport", price: 1320000 },
  { id: "bentley_continental_gt", nome: "Bentley Continental GT W12", price: 3000000 },
  { id: "lamborghini_urus", nome: "Lamborghini Urus", price: 3950000 },
  { id: "lamborghini_aventador_svj", nome: "Lamborghini Aventador SVJ R", price: 6800000 },
  { id: "ferrari_purosangue", nome: "Ferrari Purosangue", price: 7700000 },
  { id: "rolls_royce_ghost", nome: "Rolls-Royce Ghost", price: 6000000 },
  { id: "rolls_royce_spectre", nome: "Rolls-Royce Spectre", price: 6500000 },
  { id: "rolls_royce_cullinan", nome: "Rolls-Royce Cullinan", price: 7800000 },
  { id: "rolls_royce_phantom", nome: "Rolls-Royce Phantom", price: 8500000 }
];

const aircraftCatalog = [
  { id: "embraer_phenom_300e", nome: "Embraer Phenom 300E", priceUsd: 10000000, cruiseKmh: 839, opCostUsdPerHour: 3400 },
  { id: "cessna_citation_latitude", nome: "Cessna Citation Latitude", priceUsd: 19000000, cruiseKmh: 826, opCostUsdPerHour: 4800 },
  { id: "bombardier_challenger_3500", nome: "Bombardier Challenger 3500", priceUsd: 26700000, cruiseKmh: 870, opCostUsdPerHour: 6200 },
  { id: "gulfstream_g500", nome: "Gulfstream G500", priceUsd: 52000000, cruiseKmh: 956, opCostUsdPerHour: 8800 },
  { id: "dassault_falcon_8x", nome: "Dassault Falcon 8X", priceUsd: 62000000, cruiseKmh: 900, opCostUsdPerHour: 9800 }
];

const travelRoutes = [
  { id: "gru_gig", origem: "Sao Paulo", destino: "Rio de Janeiro", pais: "Brasil", km: 360, airportFeeUsd: 700 },
  { id: "gru_bsb", origem: "Sao Paulo", destino: "Brasilia", pais: "Brasil", km: 870, airportFeeUsd: 850 },
  { id: "gru_ssa", origem: "Sao Paulo", destino: "Salvador", pais: "Brasil", km: 1450, airportFeeUsd: 1200 },
  { id: "gru_eze", origem: "Sao Paulo", destino: "Buenos Aires", pais: "Argentina", km: 1670, airportFeeUsd: 1900 },
  { id: "gru_scl", origem: "Sao Paulo", destino: "Santiago", pais: "Chile", km: 2620, airportFeeUsd: 2200 },
  { id: "gru_lim", origem: "Sao Paulo", destino: "Lima", pais: "Peru", km: 3470, airportFeeUsd: 2500 },
  { id: "gru_mia", origem: "Sao Paulo", destino: "Miami", pais: "Estados Unidos", km: 6570, airportFeeUsd: 4200 },
  { id: "gru_lis", origem: "Sao Paulo", destino: "Lisboa", pais: "Portugal", km: 7940, airportFeeUsd: 4600 },
  { id: "gru_lhr", origem: "Sao Paulo", destino: "Londres", pais: "Reino Unido", km: 9500, airportFeeUsd: 5200 },
  { id: "gru_dxb", origem: "Sao Paulo", destino: "Dubai", pais: "Emirados Arabes Unidos", km: 12100, airportFeeUsd: 6900 }
];

const SAF_CLUB_PROFILES = [
  // Serie A (Brasil)
  { id: "flamengo", nome: "Flamengo", league: "Serie A", region: "Brasil", buyPrice: 2800000000, debt: 380000000, pressure: 92, reputation: 86, fanBase: 44000000, potential: 1.95 },
  { id: "corinthians", nome: "Corinthians", league: "Serie A", region: "Brasil", buyPrice: 2300000000, debt: 1800000000, pressure: 95, reputation: 82, fanBase: 33000000, potential: 1.9 },
  { id: "palmeiras", nome: "Palmeiras", league: "Serie A", region: "Brasil", buyPrice: 2400000000, debt: 300000000, pressure: 91, reputation: 85, fanBase: 23000000, potential: 1.92 },
  { id: "sao_paulo", nome: "Sao Paulo", league: "Serie A", region: "Brasil", buyPrice: 1900000000, debt: 900000000, pressure: 88, reputation: 80, fanBase: 21000000, potential: 1.82 },
  { id: "vasco", nome: "Vasco da Gama", league: "Serie A", region: "Brasil", buyPrice: 1700000000, debt: 1350000000, pressure: 93, reputation: 76, fanBase: 17000000, potential: 1.78 },
  { id: "santos", nome: "Santos", league: "Serie A", region: "Brasil", buyPrice: 1600000000, debt: 650000000, pressure: 84, reputation: 77, fanBase: 12000000, potential: 1.75 },
  { id: "gremio", nome: "Gremio", league: "Serie A", region: "Brasil", buyPrice: 1450000000, debt: 700000000, pressure: 82, reputation: 76, fanBase: 10000000, potential: 1.72 },
  { id: "internacional", nome: "Internacional", league: "Serie A", region: "Brasil", buyPrice: 1420000000, debt: 620000000, pressure: 82, reputation: 75, fanBase: 10000000, potential: 1.72 },
  { id: "cruzeiro", nome: "Cruzeiro", league: "Serie A", region: "Brasil", buyPrice: 1250000000, debt: 750000000, pressure: 86, reputation: 72, fanBase: 9000000, potential: 1.7 },
  { id: "atletico_mg", nome: "Atletico Mineiro", league: "Serie A", region: "Brasil", buyPrice: 1350000000, debt: 1550000000, pressure: 89, reputation: 75, fanBase: 9000000, potential: 1.7 },
  { id: "fluminense", nome: "Fluminense", league: "Serie A", region: "Brasil", buyPrice: 980000000, debt: 550000000, pressure: 78, reputation: 71, fanBase: 7000000, potential: 1.62 },
  { id: "botafogo", nome: "Botafogo", league: "Serie A", region: "Brasil", buyPrice: 1050000000, debt: 600000000, pressure: 80, reputation: 73, fanBase: 7000000, potential: 1.64 },
  { id: "bahia", nome: "Bahia", league: "Serie A", region: "Brasil", buyPrice: 950000000, debt: 420000000, pressure: 74, reputation: 70, fanBase: 6000000, potential: 1.6 },
  { id: "fortaleza", nome: "Fortaleza", league: "Serie A", region: "Brasil", buyPrice: 860000000, debt: 300000000, pressure: 72, reputation: 69, fanBase: 5500000, potential: 1.58 },
  { id: "ceara", nome: "Ceara", league: "Serie A", region: "Brasil", buyPrice: 720000000, debt: 280000000, pressure: 70, reputation: 66, fanBase: 5000000, potential: 1.54 },
  { id: "sport", nome: "Sport", league: "Serie A", region: "Brasil", buyPrice: 760000000, debt: 340000000, pressure: 72, reputation: 67, fanBase: 5000000, potential: 1.55 },
  { id: "vitoria", nome: "Vitoria", league: "Serie A", region: "Brasil", buyPrice: 640000000, debt: 260000000, pressure: 69, reputation: 64, fanBase: 4200000, potential: 1.5 },
  { id: "juventude", nome: "Juventude", league: "Serie A", region: "Brasil", buyPrice: 610000000, debt: 220000000, pressure: 67, reputation: 62, fanBase: 1800000, potential: 1.46 },
  { id: "mirassol", nome: "Mirassol", league: "Serie A", region: "Brasil", buyPrice: 620000000, debt: 180000000, pressure: 66, reputation: 63, fanBase: 900000, potential: 1.48 },
  { id: "bragantino", nome: "Red Bull Bragantino", league: "Serie A", region: "Brasil", buyPrice: 820000000, debt: 150000000, pressure: 68, reputation: 68, fanBase: 1400000, potential: 1.57 },

  // Serie B (Brasil)
  { id: "athletico_pr", nome: "Athletico Paranaense", league: "Serie B", region: "Brasil", buyPrice: 980000000, debt: 380000000, pressure: 78, reputation: 71, fanBase: 6000000, potential: 1.62 },
  { id: "atletico_go", nome: "Atletico Goianiense", league: "Serie B", region: "Brasil", buyPrice: 420000000, debt: 190000000, pressure: 63, reputation: 58, fanBase: 1200000, potential: 1.36 },
  { id: "criciuma", nome: "Criciuma", league: "Serie B", region: "Brasil", buyPrice: 360000000, debt: 170000000, pressure: 60, reputation: 57, fanBase: 1000000, potential: 1.33 },
  { id: "cuiaba", nome: "Cuiaba", league: "Serie B", region: "Brasil", buyPrice: 380000000, debt: 140000000, pressure: 58, reputation: 56, fanBase: 900000, potential: 1.34 },
  { id: "america_mg", nome: "America-MG", league: "Serie B", region: "Brasil", buyPrice: 430000000, debt: 260000000, pressure: 62, reputation: 59, fanBase: 1400000, potential: 1.37 },
  { id: "avai", nome: "Avai", league: "Serie B", region: "Brasil", buyPrice: 280000000, debt: 150000000, pressure: 58, reputation: 54, fanBase: 700000, potential: 1.28 },
  { id: "botafogo_sp", nome: "Botafogo-SP", league: "Serie B", region: "Brasil", buyPrice: 250000000, debt: 120000000, pressure: 56, reputation: 53, fanBase: 500000, potential: 1.24 },
  { id: "chapecoense", nome: "Chapecoense", league: "Serie B", region: "Brasil", buyPrice: 300000000, debt: 160000000, pressure: 57, reputation: 55, fanBase: 1200000, potential: 1.29 },
  { id: "coritiba", nome: "Coritiba", league: "Serie B", region: "Brasil", buyPrice: 650000000, debt: 360000000, pressure: 68, reputation: 64, fanBase: 3500000, potential: 1.48 },
  { id: "crb", nome: "CRB", league: "Serie B", region: "Brasil", buyPrice: 240000000, debt: 110000000, pressure: 55, reputation: 52, fanBase: 700000, potential: 1.22 },
  { id: "ferroviaria", nome: "Ferroviaria", league: "Serie B", region: "Brasil", buyPrice: 220000000, debt: 90000000, pressure: 53, reputation: 51, fanBase: 350000, potential: 1.2 },
  { id: "goias", nome: "Goias", league: "Serie B", region: "Brasil", buyPrice: 480000000, debt: 210000000, pressure: 62, reputation: 60, fanBase: 2500000, potential: 1.4 },
  { id: "novorizontino", nome: "Novorizontino", league: "Serie B", region: "Brasil", buyPrice: 210000000, debt: 85000000, pressure: 52, reputation: 50, fanBase: 250000, potential: 1.18 },
  { id: "operario_pr", nome: "Operario-PR", league: "Serie B", region: "Brasil", buyPrice: 230000000, debt: 100000000, pressure: 53, reputation: 51, fanBase: 300000, potential: 1.2 },
  { id: "paysandu", nome: "Paysandu", league: "Serie B", region: "Brasil", buyPrice: 330000000, debt: 150000000, pressure: 58, reputation: 55, fanBase: 1500000, potential: 1.3 },
  { id: "remo", nome: "Remo", league: "Serie B", region: "Brasil", buyPrice: 320000000, debt: 140000000, pressure: 58, reputation: 55, fanBase: 1400000, potential: 1.3 },
  { id: "vila_nova", nome: "Vila Nova", league: "Serie B", region: "Brasil", buyPrice: 260000000, debt: 120000000, pressure: 56, reputation: 53, fanBase: 850000, potential: 1.24 },
  { id: "volta_redonda", nome: "Volta Redonda", league: "Serie B", region: "Brasil", buyPrice: 180000000, debt: 70000000, pressure: 50, reputation: 48, fanBase: 250000, potential: 1.15 },
  { id: "amazonas", nome: "Amazonas", league: "Serie B", region: "Brasil", buyPrice: 170000000, debt: 65000000, pressure: 49, reputation: 47, fanBase: 220000, potential: 1.14 },
  { id: "athletic", nome: "Athletic Club", league: "Serie B", region: "Brasil", buyPrice: 190000000, debt: 75000000, pressure: 50, reputation: 48, fanBase: 250000, potential: 1.16 },

  // Serie C (Brasil)
  { id: "ponte_preta", nome: "Ponte Preta", league: "Serie C", region: "Brasil", buyPrice: 260000000, debt: 130000000, pressure: 58, reputation: 54, fanBase: 1000000, potential: 1.28 },
  { id: "guarani", nome: "Guarani", league: "Serie C", region: "Brasil", buyPrice: 250000000, debt: 120000000, pressure: 57, reputation: 53, fanBase: 900000, potential: 1.27 },
  { id: "nautico", nome: "Nautico", league: "Serie C", region: "Brasil", buyPrice: 230000000, debt: 115000000, pressure: 56, reputation: 52, fanBase: 1200000, potential: 1.24 },
  { id: "figueirense", nome: "Figueirense", league: "Serie C", region: "Brasil", buyPrice: 220000000, debt: 110000000, pressure: 55, reputation: 52, fanBase: 1000000, potential: 1.23 },
  { id: "ituano", nome: "Ituano", league: "Serie C", region: "Brasil", buyPrice: 170000000, debt: 85000000, pressure: 50, reputation: 48, fanBase: 250000, potential: 1.16 },
  { id: "londrina", nome: "Londrina", league: "Serie C", region: "Brasil", buyPrice: 180000000, debt: 90000000, pressure: 51, reputation: 49, fanBase: 400000, potential: 1.17 },
  { id: "abc", nome: "ABC", league: "Serie C", region: "Brasil", buyPrice: 160000000, debt: 80000000, pressure: 49, reputation: 47, fanBase: 450000, potential: 1.14 },
  { id: "caxias", nome: "Caxias", league: "Serie C", region: "Brasil", buyPrice: 145000000, debt: 70000000, pressure: 47, reputation: 45, fanBase: 250000, potential: 1.12 },
  { id: "confianca", nome: "Confianca", league: "Serie C", region: "Brasil", buyPrice: 130000000, debt: 65000000, pressure: 46, reputation: 44, fanBase: 180000, potential: 1.1 },
  { id: "csa", nome: "CSA", league: "Serie C", region: "Brasil", buyPrice: 155000000, debt: 76000000, pressure: 48, reputation: 46, fanBase: 500000, potential: 1.13 },
  { id: "floresta", nome: "Floresta", league: "Serie C", region: "Brasil", buyPrice: 90000000, debt: 42000000, pressure: 42, reputation: 40, fanBase: 90000, potential: 1.05 },
  { id: "itabaiana", nome: "Itabaiana", league: "Serie C", region: "Brasil", buyPrice: 85000000, debt: 38000000, pressure: 41, reputation: 39, fanBase: 80000, potential: 1.04 },
  { id: "maringa", nome: "Maringa", league: "Serie C", region: "Brasil", buyPrice: 100000000, debt: 46000000, pressure: 43, reputation: 41, fanBase: 120000, potential: 1.06 },
  { id: "retro", nome: "Retro", league: "Serie C", region: "Brasil", buyPrice: 95000000, debt: 40000000, pressure: 42, reputation: 40, fanBase: 90000, potential: 1.05 },
  { id: "sao_bernardo", nome: "Sao Bernardo", league: "Serie C", region: "Brasil", buyPrice: 120000000, debt: 55000000, pressure: 45, reputation: 43, fanBase: 140000, potential: 1.08 },
  { id: "tombense", nome: "Tombense", league: "Serie C", region: "Brasil", buyPrice: 115000000, debt: 53000000, pressure: 44, reputation: 42, fanBase: 120000, potential: 1.07 },
  { id: "ypiranga_rs", nome: "Ypiranga-RS", league: "Serie C", region: "Brasil", buyPrice: 90000000, debt: 42000000, pressure: 42, reputation: 40, fanBase: 100000, potential: 1.05 },
  { id: "botafogo_pb", nome: "Botafogo-PB", league: "Serie C", region: "Brasil", buyPrice: 125000000, debt: 59000000, pressure: 45, reputation: 43, fanBase: 320000, potential: 1.09 },
  { id: "anapolis", nome: "Anapolis", league: "Serie C", region: "Brasil", buyPrice: 80000000, debt: 35000000, pressure: 40, reputation: 38, fanBase: 70000, potential: 1.03 },
  { id: "brusque", nome: "Brusque", league: "Serie C", region: "Brasil", buyPrice: 95000000, debt: 43000000, pressure: 42, reputation: 40, fanBase: 90000, potential: 1.05 },

  // Europa (alguns clubes)
  { id: "benfica", nome: "Benfica", league: "Europa", region: "Europa", buyPrice: 9500000000, debt: 3200000000, pressure: 86, reputation: 82, fanBase: 14000000, potential: 1.9 },
  { id: "porto", nome: "Porto", league: "Europa", region: "Europa", buyPrice: 7800000000, debt: 2500000000, pressure: 84, reputation: 80, fanBase: 10000000, potential: 1.84 },
  { id: "sporting", nome: "Sporting CP", league: "Europa", region: "Europa", buyPrice: 7200000000, debt: 2200000000, pressure: 82, reputation: 79, fanBase: 9500000, potential: 1.8 },
  { id: "ajax", nome: "Ajax", league: "Europa", region: "Europa", buyPrice: 6800000000, debt: 1800000000, pressure: 80, reputation: 78, fanBase: 9000000, potential: 1.78 },
  { id: "psv", nome: "PSV", league: "Europa", region: "Europa", buyPrice: 6100000000, debt: 1600000000, pressure: 78, reputation: 76, fanBase: 7000000, potential: 1.74 },
  { id: "atalanta", nome: "Atalanta", league: "Europa", region: "Europa", buyPrice: 5600000000, debt: 1500000000, pressure: 76, reputation: 74, fanBase: 5000000, potential: 1.7 },
  { id: "napoli", nome: "Napoli", league: "Europa", region: "Europa", buyPrice: 8800000000, debt: 2800000000, pressure: 84, reputation: 81, fanBase: 12000000, potential: 1.86 },
  { id: "dortmund", nome: "Borussia Dortmund", league: "Europa", region: "Europa", buyPrice: 10500000000, debt: 3000000000, pressure: 88, reputation: 83, fanBase: 15000000, potential: 1.92 },
  { id: "tottenham", nome: "Tottenham", league: "Europa", region: "Europa", buyPrice: 13500000000, debt: 4600000000, pressure: 90, reputation: 84, fanBase: 22000000, potential: 1.96 },
  { id: "atletico_madrid", nome: "Atletico de Madrid", league: "Europa", region: "Europa", buyPrice: 14000000000, debt: 5200000000, pressure: 91, reputation: 85, fanBase: 23000000, potential: 1.98 }
];

const SAF_STRUCTURE_DEFS = [
  { id: "ct", nome: "Centro de treinamento", baseCost: 50000000, revenueBoost: 0.035, repBoost: 1.3 },
  { id: "base", nome: "Base sub-17/sub-20", baseCost: 60000000, revenueBoost: 0.04, repBoost: 1.6 },
  { id: "estadio", nome: "Estadio", baseCost: 95000000, revenueBoost: 0.06, repBoost: 1.1 },
  { id: "medico", nome: "Departamento medico", baseCost: 35000000, revenueBoost: 0.02, repBoost: 0.9 },
  { id: "scout", nome: "Scout internacional", baseCost: 42000000, revenueBoost: 0.03, repBoost: 1.1 }
];

function createSafCompetitions() {
  return {
    seasonYear: 1,
    lastActionMonthStamp: "",
    league: {
      tier: "A",
      name: "Liga nacional",
      roundsTotal: 38,
      roundsPlayed: 0,
      points: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      position: 20,
      finished: false
    },
    copa: {
      phase: 0,
      phases: ["1a fase", "2a fase", "3a fase", "Oitavas", "Quartas", "Semi", "Final"],
      alive: true,
      finished: false
    },
    libertadores: {
      qualified: false,
      phase: 0,
      phases: ["Grupos", "Oitavas", "Quartas", "Semi", "Final"],
      alive: true,
      finished: false
    }
  };
}

function safLeagueMetaByTier(tier, region) {
  if (region !== "Brasil") {
    return { tier: "EU", name: "Liga Europeia", roundsTotal: 34, teams: 20 };
  }
  if (tier === "A") return { tier: "A", name: "Brasileirao Serie A", roundsTotal: 38, teams: 20 };
  if (tier === "B") return { tier: "B", name: "Brasileirao Serie B", roundsTotal: 38, teams: 20 };
  return { tier: "C", name: "Brasileirao Serie C", roundsTotal: 34, teams: 20 };
}

function safLeaguePrizeByTier(tier, position) {
  const pos = clamp(position, 1, 20);
  if (tier === "A") return Math.floor(24000000 + (21 - pos) * 3200000);
  if (tier === "B") return Math.floor(12000000 + (21 - pos) * 1700000);
  if (tier === "C") return Math.floor(6500000 + (21 - pos) * 900000);
  return Math.floor(18000000 + (21 - pos) * 2200000);
}

function defaultSafState() {
  return {
    owned: false,
    profileId: "",
    clubName: "",
    league: "",
    region: "",
    purchasePrice: 0,
    debt: 0,
    reputation: 35,
    fanMood: 60,
    pressure: 50,
    valuation: 0,
    safSoldPct: 0,
    sponsorsLevel: 0,
    tvLevel: 0,
    structures: { ct: 0, base: 0, estadio: 0, medico: 0, scout: 0 },
    europeBranch: false,
    networkClubs: 0,
    roster: [],
    youthPool: [],
    investors: { arab: false, us: false, ipo: false },
    titles: 0,
    libertadores: 0,
    champions: 0,
    trophies: { brasileirao: 0, copaDoBrasil: 0, libertadores: 0, champions: 0 },
    trophyHistory: [],
    competitions: createSafCompetitions(),
    lastMonthly: { revenue: 0, costs: 0, net: 0 },
    eventFeed: []
  };
}

function defaultCryptoState() {
  return {
    selectedCoinId: "BTC",
    coins: {
      BTC: 0,
      ETH: 0,
      SOL: 0
    },
    market: {
      BTC: 68000,
      ETH: 3200,
      SOL: 140
    },
    spaces: {},
    gpus: {}
  };
}

function defaultFranchiseState() {
  return {
    bankBalance: 0,
    active: null,
    history: []
  };
}

const state = {
  player: { nome: "", idade: "", telefone: "" },
  money: 0,
  clickValue: 10,
  monthRevenue: 0,
  year: 1,
  month: 1,
  secondsToMonth: MONTH_SECONDS,
  yearlyRevenues: [],
  yearlyClickRevenue: 0,
  level: 1,
  xp: 0,
  reputation: 50,
  prestigePoints: 0,
  clickCombo: {
    streak: 0,
    best: 0,
    lastTs: 0
  },
  farm: {
    name: "",
    hectares: 0,
    investments: {},
    cattle: [],
    nextCattleId: 1
  },
  realEstate: {
    owned: {},
    personalUse: {}
  },
  research: {
    automation: 0,
    hr: 0,
    branding: 0
  },
  contracts: {
    lastOfferMonthStamp: 0,
    offers: [],
    active: []
  },
  dailyMissions: {
    dateKey: "",
    list: []
  },
  economy: {
    inflation: 0.04,
    interest: 0.09,
    confidence: 1,
    sectorBoosts: {}
  },
  loan: {
    principalRemaining: 0,
    installment: 0,
    monthsLeft: 0,
    annualRate: 0,
    label: ""
  },
  tax: {
    debt: 0,
    pendingYearClose: null
  },
  participations: {
    holdings: {},
    market: {}
  },
  aviation: {
    fleet: [],
    nextAircraftId: 1,
    accruedUsd: 0,
    debtUsd: 0,
    selectedAircraftId: 0
  },
  passport: {
    countries: {},
    totalTrips: 0
  },
  worldWealth: {},
  saf: defaultSafState(),
  garage: [],
  nextCarId: 1,
  forex: {
    usd: { balance: 0, rate: 5.45, min: 4.9, max: 7.1 },
    eur: { balance: 0, rate: 7.15, min: 6.7, max: 7.8 }
  },
  crypto: defaultCryptoState(),
  franchise: defaultFranchiseState(),
  savings: {
    balance: 0,
    monthlyRate: 0.01,
    lastYield: 0,
    totalYield: 0
  },
  stats: {
    totalClicks: 0,
    clickRevenue: 0,
    companyRevenue: 0,
    operationalCosts: 0,
    payrollPaid: 0,
    taxesPaid: 0,
    interestPaid: 0,
    contractRevenue: 0,
    realEstateRevenue: 0,
    dailyRevenue: 0,
    achievementRevenue: 0,
    loanReceived: 0,
    fxRevenue: 0,
    taxDebtInterestPaid: 0,
    ipvaPaid: 0,
    carSalesRevenue: 0,
    carsBroken: 0,
    travelSpendBrl: 0,
    totalFlightKm: 0,
    totalFlightHours: 0,
    aircraftTaxPaidUsd: 0,
    aircraftHangarPaidUsd: 0,
    aircraftCrewPaidUsd: 0,
    aircraftDebtInterestPaidUsd: 0,
    researchSpent: 0,
    spentUpgrades: 0,
    spentCompanies: 0,
    peakMoney: 0
  },
  logs: [],
  achievementsUnlocked: []
};

const achievements = [
  {
    id: "cliques_100",
    title: "Dedos rapidos",
    desc: "Chegue a 100 cliques.",
    check: () => state.stats.totalClicks >= 100,
    progress: () => `${state.stats.totalClicks}/100`
  },
  {
    id: "empresa_1",
    title: "Primeiro CNPJ",
    desc: "Compre 1 empresa.",
    check: () => companies.reduce((s, c) => s + c.owned, 0) >= 1,
    progress: () => `${companies.reduce((s, c) => s + c.owned, 0)}/1`
  },
  {
    id: "clique_100",
    title: "Clique premium",
    desc: "Atinga R$ 100 por clique base.",
    check: () => state.clickValue >= 100,
    progress: () => `${formatMoney(state.clickValue)} / ${formatMoney(100)}`
  },
  {
    id: "passivo_5k",
    title: "Renda passiva",
    desc: "Ganhe R$ 5.000/mes em empresas.",
    check: () => effectiveCompanyIncome() >= 5000,
    progress: () => `${formatMoney(effectiveCompanyIncome())} / ${formatMoney(5000)}`
  },
  {
    id: "imposto_1k",
    title: "Contribuinte oficial",
    desc: "Pague R$ 1.000 em impostos acumulados.",
    check: () => state.stats.taxesPaid >= 1000,
    progress: () => `${formatMoney(state.stats.taxesPaid)} / ${formatMoney(1000)}`
  },
  {
    id: "patrimonio_500k",
    title: "Magnata",
    desc: "Chegue a R$ 500.000 de patrimonio.",
    check: () => getPatrimonio() >= 500000,
    progress: () => `${formatMoney(getPatrimonio())} / ${formatMoney(500000)}`
  },
  {
    id: "saf_primeira_compra",
    title: "Dono de clube",
    desc: "Compre sua primeira SAF.",
    check: () => Boolean(state.saf?.owned),
    progress: () => (state.saf?.owned ? "Concluido" : "0/1")
  },
  {
    id: "saf_bilionaria",
    title: "SAF bilionaria",
    desc: "Leve o valor da SAF para R$ 1 bilhao.",
    check: () => safeNumber(state.saf?.valuation, 0) >= 1000000000,
    progress: () => `${formatMoney(safeNumber(state.saf?.valuation, 0))} / ${formatMoney(1000000000)}`
  }
];

const el = {
  money: document.getElementById("money"),
  dateLine: document.getElementById("dateLine"),
  countdown: document.getElementById("countdown"),
  clickLine: document.getElementById("clickLine"),
  comboText: document.getElementById("comboText"),
  comboStreak: document.getElementById("comboStreak"),
  comboBar: document.getElementById("comboBar"),
  incomeLine: document.getElementById("incomeLine"),
  econLine: document.getElementById("econLine"),
  expenseLine: document.getElementById("expenseLine"),
  fixedCostLine: document.getElementById("fixedCostLine"),
  skipMonthBtn: document.getElementById("skipMonthBtn"),
  monthRevenue: document.getElementById("monthRevenue"),
  clickBtn: document.getElementById("clickBtn"),
  floatGain: document.getElementById("floatGain"),
  monthBar: document.getElementById("monthBar"),
  contractList: document.getElementById("contractList"),
  refreshContractsBtn: document.getElementById("refreshContractsBtn"),
  upgradeList: document.getElementById("upgradeList"),
  companyList: document.getElementById("companyList"),
  realEstateSummary: document.getElementById("realEstateSummary"),
  realEstateList: document.getElementById("realEstateList"),
  participationSummary: document.getElementById("participationSummary"),
  participationList: document.getElementById("participationList"),
  garageSummary: document.getElementById("garageSummary"),
  carShopList: document.getElementById("carShopList"),
  garageList: document.getElementById("garageList"),
  farmName: document.getElementById("farmName"),
  farmNameInput: document.getElementById("farmNameInput"),
  farmNameBtn: document.getElementById("farmNameBtn"),
  farmHectares: document.getElementById("farmHectares"),
  farmIncome: document.getElementById("farmIncome"),
  farmHectarePrice: document.getElementById("farmHectarePrice"),
  farmHectaresInput: document.getElementById("farmHectaresInput"),
  farmBuyHectaresBtn: document.getElementById("farmBuyHectaresBtn"),
  cattleList: document.getElementById("cattleList"),
  farmInvestList: document.getElementById("farmInvestList"),
  aircraftSummary: document.getElementById("aircraftSummary"),
  aircraftAnnualDue: document.getElementById("aircraftAnnualDue"),
  aircraftDebtUsd: document.getElementById("aircraftDebtUsd"),
  aircraftShopList: document.getElementById("aircraftShopList"),
  aircraftFleetList: document.getElementById("aircraftFleetList"),
  travelAircraftInfo: document.getElementById("travelAircraftInfo"),
  travelAircraftSelect: document.getElementById("travelAircraftSelect"),
  travelStats: document.getElementById("travelStats"),
  routeList: document.getElementById("routeList"),
  safStatus: document.getElementById("safStatus"),
  safMonthLine: document.getElementById("safMonthLine"),
  safValuationLine: document.getElementById("safValuationLine"),
  safClubChoices: document.getElementById("safClubChoices"),
  safStructureList: document.getElementById("safStructureList"),
  safMarketList: document.getElementById("safMarketList"),
  safFinanceList: document.getElementById("safFinanceList"),
  safExpansionList: document.getElementById("safExpansionList"),
  safCompetitionsList: document.getElementById("safCompetitionsList"),
  safCalendarList: document.getElementById("safCalendarList"),
  safTrophiesList: document.getElementById("safTrophiesList"),
  safEventList: document.getElementById("safEventList"),
  safGoalLine: document.getElementById("safGoalLine"),
  passportSummary: document.getElementById("passportSummary"),
  passportList: document.getElementById("passportList"),
  workforceLine: document.getElementById("workforceLine"),
  eventLog: document.getElementById("eventLog"),
  nameInput: document.getElementById("nameInput"),
  ageInput: document.getElementById("ageInput"),
  phoneInput: document.getElementById("phoneInput"),
  profilePreview: document.getElementById("profilePreview"),
  statLevel: document.getElementById("statLevel"),
  statXp: document.getElementById("statXp"),
  statMultiplier: document.getElementById("statMultiplier"),
  statPrestige: document.getElementById("statPrestige"),
  statReputation: document.getElementById("statReputation"),
  statWealth: document.getElementById("statWealth"),
  statClicks: document.getElementById("statClicks"),
  statClickIncome: document.getElementById("statClickIncome"),
  statCompanyIncome: document.getElementById("statCompanyIncome"),
  statTaxPaid: document.getElementById("statTaxPaid"),
  statInterestPaid: document.getElementById("statInterestPaid"),
  statPayrollPaid: document.getElementById("statPayrollPaid"),
  statContractRevenue: document.getElementById("statContractRevenue"),
  statOpsCost: document.getElementById("statOpsCost"),
  statPeak: document.getElementById("statPeak"),
  achievementList: document.getElementById("achievementList"),
  dailyInfo: document.getElementById("dailyInfo"),
  dailyMissionList: document.getElementById("dailyMissionList"),
  saveProfileBtn: document.getElementById("saveProfileBtn"),
  saveLocalBtn: document.getElementById("saveLocalBtn"),
  loadLocalBtn: document.getElementById("loadLocalBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importBtn: document.getElementById("importBtn"),
  refreshRankingBtn: document.getElementById("refreshRankingBtn"),
  worldRankingInfo: document.getElementById("worldRankingInfo"),
  worldRankingList: document.getElementById("worldRankingList"),
  resetCharacterBtn: document.getElementById("resetCharacterBtn"),
  loanStatus: document.getElementById("loanStatus"),
  loanSmallBtn: document.getElementById("loanSmallBtn"),
  loanMediumBtn: document.getElementById("loanMediumBtn"),
  loanLargeBtn: document.getElementById("loanLargeBtn"),
  researchAutomation: document.getElementById("researchAutomation"),
  researchAutomationBtn: document.getElementById("researchAutomationBtn"),
  researchHr: document.getElementById("researchHr"),
  researchHrBtn: document.getElementById("researchHrBtn"),
  researchBranding: document.getElementById("researchBranding"),
  researchBrandingBtn: document.getElementById("researchBrandingBtn"),
  prestigeBonusText: document.getElementById("prestigeBonusText"),
  prestigeBtn: document.getElementById("prestigeBtn"),
  backupCode: document.getElementById("backupCode"),
  statusMsg: document.getElementById("statusMsg"),
  rankingList: document.getElementById("rankingList"),
  bankCash: document.getElementById("bankCash"),
  bankTaxDebt: document.getElementById("bankTaxDebt"),
  savingsBalance: document.getElementById("savingsBalance"),
  savingsMonthlyYield: document.getElementById("savingsMonthlyYield"),
  savingsAmountInput: document.getElementById("savingsAmountInput"),
  savingsDepositBtn: document.getElementById("savingsDepositBtn"),
  savingsWithdrawBtn: document.getElementById("savingsWithdrawBtn"),
  usdRate: document.getElementById("usdRate"),
  usdWallet: document.getElementById("usdWallet"),
  usdWalletBrl: document.getElementById("usdWalletBrl"),
  usdBuyInput: document.getElementById("usdBuyInput"),
  usdBuyBtn: document.getElementById("usdBuyBtn"),
  usdSellAllBtn: document.getElementById("usdSellAllBtn"),
  eurRate: document.getElementById("eurRate"),
  eurWallet: document.getElementById("eurWallet"),
  eurWalletBrl: document.getElementById("eurWalletBrl"),
  eurBuyInput: document.getElementById("eurBuyInput"),
  eurBuyBtn: document.getElementById("eurBuyBtn"),
  eurSellAllBtn: document.getElementById("eurSellAllBtn"),
  fxTotalBrl: document.getElementById("fxTotalBrl"),
  franchiseBankBalance: document.getElementById("franchiseBankBalance"),
  franchiseStatus: document.getElementById("franchiseStatus"),
  franchiseValuation: document.getElementById("franchiseValuation"),
  franchiseUnitsSold: document.getElementById("franchiseUnitsSold"),
  franchiseRoyaltyLine: document.getElementById("franchiseRoyaltyLine"),
  franchiseNameInput: document.getElementById("franchiseNameInput"),
  franchiseSegmentSelect: document.getElementById("franchiseSegmentSelect"),
  franchiseSegmentInfo: document.getElementById("franchiseSegmentInfo"),
  franchiseCreateBtn: document.getElementById("franchiseCreateBtn"),
  franchiseTransferBtn: document.getElementById("franchiseTransferBtn"),
  franchiseSellBtn: document.getElementById("franchiseSellBtn"),
  franchiseLastMonth: document.getElementById("franchiseLastMonth"),
  cryptoSummary: document.getElementById("cryptoSummary"),
  cryptoCoinPrice: document.getElementById("cryptoCoinPrice"),
  cryptoCoinSelect: document.getElementById("cryptoCoinSelect"),
  cryptoPowerLine: document.getElementById("cryptoPowerLine"),
  cryptoMineRate: document.getElementById("cryptoMineRate"),
  cryptoWalletSummary: document.getElementById("cryptoWalletSummary"),
  cryptoOpsCost: document.getElementById("cryptoOpsCost"),
  cryptoSpaceList: document.getElementById("cryptoSpaceList"),
  cryptoGpuList: document.getElementById("cryptoGpuList"),
  cryptoSellAllBtn: document.getElementById("cryptoSellAllBtn"),
  cryptoConvertList: document.getElementById("cryptoConvertList"),
  taxOverlay: document.getElementById("taxOverlay"),
  taxDueText: document.getElementById("taxDueText"),
  taxDetails: document.getElementById("taxDetails"),
  taxPayNowBtn: document.getElementById("taxPayNowBtn"),
  taxPayLaterBtn: document.getElementById("taxPayLaterBtn"),
  adminLoginBox: document.getElementById("adminLoginBox"),
  adminActionsBox: document.getElementById("adminActionsBox"),
  adminAccessInput: document.getElementById("adminAccessInput"),
  adminPasswordInput: document.getElementById("adminPasswordInput"),
  adminLoginBtn: document.getElementById("adminLoginBtn"),
  adminLoginMsg: document.getElementById("adminLoginMsg"),
  adminSessionText: document.getElementById("adminSessionText"),
  adminMoneyInput: document.getElementById("adminMoneyInput"),
  adminAddMoneyBtn: document.getElementById("adminAddMoneyBtn"),
  adminRemoveMoneyBtn: document.getElementById("adminRemoveMoneyBtn"),
  adminSetMoneyInput: document.getElementById("adminSetMoneyInput"),
  adminSetMoneyBtn: document.getElementById("adminSetMoneyBtn"),
  adminClickInput: document.getElementById("adminClickInput"),
  adminAddClickBtn: document.getElementById("adminAddClickBtn"),
  adminPrestigeInput: document.getElementById("adminPrestigeInput"),
  adminAddPrestigeBtn: document.getElementById("adminAddPrestigeBtn"),
  adminMonthInput: document.getElementById("adminMonthInput"),
  adminAdvanceMonthBtn: document.getElementById("adminAdvanceMonthBtn"),
  adminBoostBtn: document.getElementById("adminBoostBtn"),
  adminUnlockBtn: document.getElementById("adminUnlockBtn"),
  adminClearDebtsBtn: document.getElementById("adminClearDebtsBtn"),
  adminLogoutBtn: document.getElementById("adminLogoutBtn")
};

const moneyFmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const usdFmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "USD" });
const eurFmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "EUR" });
let audioCtx;
const adminSession = { loggedIn: false };
let safClubFilter = "all";

window.__GAME_LOADED__ = true;
window.addEventListener("error", (ev) => {
  console.error("Erro global:", ev?.error || ev?.message || ev);
  if (el.statusMsg) {
    el.statusMsg.className = "mini bad";
    el.statusMsg.textContent = `Erro no jogo: ${ev?.message || "Falha desconhecida"}`;
  }
});

function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
}

function playTone(freq, ms, gain = 0.02, type = "sine") {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const vol = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  vol.gain.value = gain;
  osc.connect(vol);
  vol.connect(audioCtx.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    osc.disconnect();
    vol.disconnect();
  }, ms);
}

function sfxClick() {
  playTone(620, 45, 0.02, "triangle");
}

function sfxBuy() {
  playTone(520, 70, 0.03, "square");
  setTimeout(() => playTone(760, 95, 0.025, "square"), 45);
}

function sfxMonthClose() {
  playTone(330, 120, 0.03, "sine");
  setTimeout(() => playTone(440, 120, 0.03, "sine"), 120);
}

function sfxTax() {
  playTone(180, 190, 0.035, "sawtooth");
}

function sfxAchievement() {
  playTone(740, 80, 0.03, "triangle");
  setTimeout(() => playTone(980, 120, 0.03, "triangle"), 70);
}

function formatMoney(v) {
  return moneyFmt.format(v || 0);
}

function formatUsd(v) {
  return usdFmt.format(v || 0);
}

function formatEur(v) {
  return eurFmt.format(v || 0);
}

function formatCoinAmount(v) {
  const n = Math.max(0, safeNumber(v, 0));
  const maxDecimals = n >= 1 ? 6 : 8;
  return n.toLocaleString("pt-BR", { minimumFractionDigits: maxDecimals, maximumFractionDigits: maxDecimals });
}

function formatWealthBrl(v) {
  const value = safeNumber(v, 0);
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) {
    return `R$ ${(value / 1_000_000_000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} bi`;
  }
  if (abs >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mi`;
  }
  if (abs >= 1_000) {
    return `R$ ${(value / 1_000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil`;
  }
  return formatMoney(value);
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function safeInt(value, fallback = 0) {
  return Math.trunc(safeNumber(value, fallback));
}

function safProfileMatchesFilter(profile, filter) {
  if (!profile) return false;
  if (filter === "all") return true;
  if (filter === "eu") return profile.region === "Europa" || profile.league === "Europa";
  if (filter === "a") return profile.league === "Serie A";
  if (filter === "b") return profile.league === "Serie B";
  if (filter === "c") return profile.league === "Serie C";
  return true;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toBase64Utf8(text) {
  const raw = String(text);
  if (typeof TextEncoder !== "undefined") {
    const bytes = new TextEncoder().encode(raw);
    let binary = "";
    bytes.forEach((b) => {
      binary += String.fromCharCode(b);
    });
    return btoa(binary);
  }
  const percentEncoded = encodeURIComponent(raw).replace(/%([0-9A-F]{2})/g, (_, hex) => {
    return String.fromCharCode(Number.parseInt(hex, 16));
  });
  return btoa(percentEncoded);
}

function fromBase64Utf8(base64) {
  const binary = atob(base64);
  if (typeof TextDecoder !== "undefined") {
    const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  let percentEncoded = "";
  for (let i = 0; i < binary.length; i += 1) {
    percentEncoded += `%${binary.charCodeAt(i).toString(16).padStart(2, "0")}`;
  }
  return decodeURIComponent(percentEncoded);
}

function currentDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function getIncomeMultiplier() {
  const levelBonus = (state.level - 1) * 0.02;
  const prestigeBonus = state.prestigePoints * 0.1;
  const confidenceBonus = (state.economy.confidence - 1) * 0.3;
  const reputationBonus = (state.reputation - 50) / 500;
  const brandingBonus = state.research.branding * 0.015;
  return 1 + levelBonus + prestigeBonus + confidenceBonus + reputationBonus + brandingBonus;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function franchiseSegmentById(id) {
  return franchiseSegments.find((s) => s.id === id) || franchiseSegments[0];
}

function franchiseMonthlyRoyaltyValue(unitsSold) {
  return Math.floor(Math.max(0, safeInt(unitsSold, 0)) * FRANCHISE_MONTHLY_ROYALTY);
}

function createFranchise() {
  if (state.franchise?.active) {
    setStatus("Regra de negocio: apenas 1 franquia ativa por vez.", "warn");
    return;
  }
  const name = String(el.franchiseNameInput?.value || "").trim();
  if (!name) {
    setStatus("Informe o nome da franquia.", "bad");
    return;
  }
  const segment = franchiseSegmentById(el.franchiseSegmentSelect?.value || "");
  const setupCost = Math.max(0, safeNumber(segment.setupCost, 0));
  if (state.money < setupCost) {
    setStatus(`Saldo insuficiente. Custo para abrir: ${formatMoney(setupCost)}.`, "bad");
    return;
  }
  state.money -= setupCost;
  const initialValuation = Math.floor(setupCost * 1.35);
  state.franchise.active = {
    name: name.slice(0, 36),
    segmentId: segment.id,
    createdYear: state.year,
    createdMonth: state.month,
    setupCost,
    soldUnits: 0,
    totalFranchiseFees: 0,
    totalRoyalties: 0,
    valuation: initialValuation,
    lastMonthSales: 0,
    lastMonthFranchiseFees: 0,
    lastMonthRoyalties: 0,
    lastMonthNet: 0
  };
  if (el.franchiseNameInput) el.franchiseNameInput.value = "";
  setStatus(`Franquia ${name.slice(0, 36)} criada no segmento ${segment.nome}.`, "ok");
  logEvent(`Nova franquia criada: ${name.slice(0, 36)} (${segment.nome}). Investimento inicial ${formatMoney(setupCost)}.`, "ok");
  sfxBuy();
  render();
}

function transferFranchiseBalance() {
  const available = Math.floor(Math.max(0, safeNumber(state.franchise?.bankBalance, 0)));
  if (available <= 0) {
    setStatus("Nao ha saldo na conta de franquias para transferir.", "warn");
    return;
  }
  state.franchise.bankBalance -= available;
  state.money += available;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  setStatus(`Transferencia concluida: ${formatMoney(available)} para conta principal.`, "ok");
  logEvent(`Transferencia da conta franquias: +${formatMoney(available)} na conta principal.`, "ok");
  render();
}

function sellCurrentFranchise() {
  const active = state.franchise?.active;
  if (!active) {
    setStatus("Nao existe franquia ativa para vender.", "warn");
    return;
  }
  const saleValue = Math.floor(Math.max(0, safeNumber(active.valuation, 0)));
  state.franchise.bankBalance += saleValue;
  const segment = franchiseSegmentById(active.segmentId);
  state.franchise.history.unshift({
    name: active.name,
    segmentId: active.segmentId,
    segmentName: segment.nome,
    soldUnits: Math.max(0, safeInt(active.soldUnits, 0)),
    soldAtYear: state.year,
    soldAtMonth: state.month,
    saleValue
  });
  state.franchise.history = state.franchise.history.slice(0, 8);
  state.franchise.active = null;
  setStatus(`Franquia vendida por ${formatMoney(saleValue)} (valor foi para conta franquias).`, "ok");
  logEvent(`Venda da franqueadora concluida por ${formatMoney(saleValue)}. Agora voce pode abrir uma nova franquia.`, "warn");
  render();
}

function processFranchiseMonth() {
  if (!state.franchise || !state.franchise.active) {
    return { sales: 0, feeRevenue: 0, royalties: 0, total: 0, valuation: 0 };
  }
  const active = state.franchise.active;
  const segment = franchiseSegmentById(active.segmentId);
  const confidenceFactor = clamp(safeNumber(state.economy?.confidence, 1), 0.8, 1.3);
  const repFactor = clamp(safeNumber(state.reputation, 50) / 60, 0.75, 1.65);
  const salesMin = Math.max(0, Math.floor(segment.minSales * confidenceFactor * repFactor));
  const salesMax = Math.max(salesMin, Math.ceil(segment.maxSales * confidenceFactor * repFactor));
  const sales = Math.floor(salesMin + Math.random() * (salesMax - salesMin + 1));
  const feeRevenue = sales * FRANCHISE_SALE_PRICE;
  active.soldUnits += sales;
  const royalties = franchiseMonthlyRoyaltyValue(active.soldUnits);
  const total = feeRevenue + royalties;
  state.franchise.bankBalance += total;
  active.totalFranchiseFees += feeRevenue;
  active.totalRoyalties += royalties;
  const baseGrowth = segment.annualGrowth / 12;
  const confidenceGrowth = (confidenceFactor - 1) * 0.015;
  const growthPct = clamp(baseGrowth + confidenceGrowth + (Math.random() - 0.5) * 0.03, -0.04, 0.08);
  const floorValuation = Math.floor(active.setupCost * 0.75 + active.soldUnits * 25000);
  active.valuation = Math.max(floorValuation, Math.floor(active.valuation * (1 + growthPct) + feeRevenue * 0.08));
  active.lastMonthSales = sales;
  active.lastMonthFranchiseFees = feeRevenue;
  active.lastMonthRoyalties = royalties;
  active.lastMonthNet = total;
  return { sales, feeRevenue, royalties, total, valuation: active.valuation };
}

function updateFranchiseSegmentInfo() {
  if (!el.franchiseSegmentInfo) return;
  const segment = franchiseSegmentById(el.franchiseSegmentSelect?.value || "");
  el.franchiseSegmentInfo.textContent = `${segment.nome}: custo inicial ${formatMoney(segment.setupCost)} | vendas/mes ${segment.minSales}-${segment.maxSales} | crescimento anual medio ${(segment.annualGrowth * 100).toFixed(1)}%.`;
}

function renderFranchise() {
  if (!el.franchiseSegmentSelect) return;
  if (el.franchiseSegmentSelect.options.length === 0) {
    el.franchiseSegmentSelect.innerHTML = franchiseSegments
      .map((s) => `<option value="${s.id}">${escapeHtml(s.nome)} (${formatMoney(s.setupCost)})</option>`)
      .join("");
  }
  updateFranchiseSegmentInfo();

  const bankBalance = Math.max(0, safeNumber(state.franchise?.bankBalance, 0));
  const active = state.franchise?.active || null;
  if (el.franchiseBankBalance) el.franchiseBankBalance.textContent = formatMoney(bankBalance);
  if (!active) {
    if (el.franchiseStatus) el.franchiseStatus.textContent = "Nenhuma franquia ativa.";
    if (el.franchiseValuation) el.franchiseValuation.textContent = formatMoney(0);
    if (el.franchiseUnitsSold) el.franchiseUnitsSold.textContent = "0";
    if (el.franchiseRoyaltyLine) el.franchiseRoyaltyLine.textContent = formatMoney(0);
    if (el.franchiseLastMonth) el.franchiseLastMonth.textContent = "Sem dados ainda.";
    if (el.franchiseCreateBtn) el.franchiseCreateBtn.disabled = state.money < franchiseSegmentById(el.franchiseSegmentSelect.value).setupCost;
    if (el.franchiseSellBtn) el.franchiseSellBtn.disabled = true;
  } else {
    const segment = franchiseSegmentById(active.segmentId);
    if (el.franchiseStatus) el.franchiseStatus.textContent = `${active.name} (${segment.nome}) ativa desde Ano ${active.createdYear}, Mes ${active.createdMonth}.`;
    if (el.franchiseValuation) el.franchiseValuation.textContent = formatMoney(Math.max(0, safeNumber(active.valuation, 0)));
    if (el.franchiseUnitsSold) el.franchiseUnitsSold.textContent = String(Math.max(0, safeInt(active.soldUnits, 0)));
    if (el.franchiseRoyaltyLine) el.franchiseRoyaltyLine.textContent = `${formatMoney(Math.max(0, safeNumber(active.lastMonthRoyalties, 0)))} (fixo mensal por unidade vendida)`;
    if (el.franchiseLastMonth) {
      el.franchiseLastMonth.textContent = `Vendas no mes: ${active.lastMonthSales} franquia(s) | Taxa de franquia: ${formatMoney(active.lastMonthFranchiseFees)} | Royalties: ${formatMoney(active.lastMonthRoyalties)} | Total na conta franquias: +${formatMoney(active.lastMonthNet)}.`;
    }
    if (el.franchiseCreateBtn) el.franchiseCreateBtn.disabled = true;
    if (el.franchiseSellBtn) el.franchiseSellBtn.disabled = false;
  }
  if (el.franchiseTransferBtn) el.franchiseTransferBtn.disabled = bankBalance < 1;
}

function getSectorMultiplier(setor) {
  return safeNumber(state.economy.sectorBoosts[setor], 1);
}

function cryptoCoinById(id) {
  return cryptoCoinsCatalog.find((c) => c.id === id) || cryptoCoinsCatalog[0];
}

function cryptoGpuById(id) {
  return cryptoGpuCatalog.find((g) => g.id === id) || null;
}

function cryptoSpaceById(id) {
  return cryptoMiningSpacesCatalog.find((s) => s.id === id) || null;
}

function totalCryptoGpus() {
  return cryptoGpuCatalog.reduce((sum, gpu) => sum + Math.max(0, safeInt(state.crypto?.gpus?.[gpu.id], 0)), 0);
}

function totalCryptoHashMh() {
  return cryptoGpuCatalog.reduce((sum, gpu) => {
    const qty = Math.max(0, safeInt(state.crypto?.gpus?.[gpu.id], 0));
    return sum + qty * gpu.hashMh;
  }, 0);
}

function totalCryptoCapacity() {
  const units = cryptoMiningSpacesCatalog.reduce((sum, sp) => sum + Math.max(0, safeInt(state.crypto?.spaces?.[sp.id], 0)) * sp.capacityUnits, 0);
  return units * GPU_CAPACITY_PER_UNIT;
}

function cryptoOpsMonthlyCost() {
  const hashMh = totalCryptoHashMh();
  const kwEstimated = hashMh * 0.0034;
  const energyBrl = kwEstimated * 24 * 30 * 0.92;
  const fixed = cryptoMiningSpacesCatalog.reduce(
    (sum, sp) => sum + Math.max(0, safeInt(state.crypto?.spaces?.[sp.id], 0)) * sp.powerFeeMonthly,
    0
  );
  return Math.floor(Math.max(0, energyBrl + fixed));
}

function cryptoTotalUsdValue() {
  return cryptoCoinsCatalog.reduce((sum, coin) => {
    const qty = Math.max(0, safeNumber(state.crypto?.coins?.[coin.id], 0));
    const price = Math.max(1, safeNumber(state.crypto?.market?.[coin.id], coin.priceUsd));
    return sum + qty * price;
  }, 0);
}

function cryptoMiningRatePerSecond(coinId) {
  const coin = cryptoCoinById(coinId);
  const hashMh = totalCryptoHashMh();
  if (hashMh <= 0) return 0;
  const automationBonus = 1 + state.research.automation * 0.01;
  return hashMh * coin.yieldPerMhSecond * automationBonus;
}

function mineCryptoSecond() {
  const capacity = totalCryptoCapacity();
  const totalGpus = totalCryptoGpus();
  if (capacity <= 0 || totalGpus <= 0) return;
  const coinId = cryptoCoinById(state.crypto.selectedCoinId).id;
  const mined = cryptoMiningRatePerSecond(coinId);
  if (mined <= 0) return;
  state.crypto.coins[coinId] = Math.max(0, safeNumber(state.crypto.coins[coinId], 0)) + mined;
}

function updateCryptoMarketMonthly() {
  cryptoCoinsCatalog.forEach((coin) => {
    const current = Math.max(1, safeNumber(state.crypto.market[coin.id], coin.priceUsd));
    const macro = (state.economy.confidence - 1) * 0.018;
    const noise = (Math.random() - 0.5) * 0.13;
    const meanReversion = (coin.priceUsd - current) / coin.priceUsd * 0.035;
    const monthlyPct = clamp(macro + noise + meanReversion, -0.16, 0.18);
    state.crypto.market[coin.id] = clamp(current * (1 + monthlyPct), coin.min, coin.max);
  });
}

function cryptoGpuSellPrice(gpu) {
  const confidenceBonus = clamp((state.economy.confidence - 1) * 0.3, -0.08, 0.1);
  const ratio = clamp(0.66 + confidenceBonus, 0.6, 0.82);
  return Math.floor(gpu.price * ratio);
}

function forexValueBrl(code) {
  if (code === "USD") return state.forex.usd.balance * state.forex.usd.rate;
  return state.forex.eur.balance * state.forex.eur.rate;
}

function garageTotalValue() {
  return state.garage.reduce((sum, car) => sum + car.currentValue, 0);
}

function garageAnnualIpva() {
  return state.garage.reduce((sum, car) => sum + car.currentValue * 0.05, 0);
}

function carBreakRisk(car) {
  if (car.km < 180000) return 0;
  const kmPressure = (car.km - 180000) / 220000;
  const agePressure = car.monthsOwned / 240;
  return clamp(kmPressure + agePressure, 0, 0.92);
}

function aircraftTaxUsd(aircraft) {
  return aircraft.currentValueUsd * 0.05;
}

function aircraftMonthlyHangarUsd() {
  return 30000;
}

function aircraftMonthlyCrewUsd() {
  return 30000;
}

function aviationAnnualDueUsdPreview() {
  const taxDue = state.aviation.fleet.reduce((sum, a) => sum + aircraftTaxUsd(a), 0);
  const debtInterestPreview = state.aviation.debtUsd * state.economy.interest;
  return state.aviation.accruedUsd + taxDue + state.aviation.debtUsd + debtInterestPreview;
}

function ensureWorldWealthInitialized() {
  if (!state.worldWealth || typeof state.worldWealth !== "object") state.worldWealth = {};
  worldBillionaires.forEach((p) => {
    const current = safeNumber(state.worldWealth[p.id], NaN);
    if (!Number.isFinite(current) || current <= 0) {
      state.worldWealth[p.id] = p.usdBillion;
    }
  });
}

function evolveWorldWealthMonthly() {
  ensureWorldWealthInitialized();
  worldBillionaires.forEach((p) => {
    const base = p.usdBillion;
    const current = safeNumber(state.worldWealth[p.id], base);
    const macro = (state.economy.confidence - 1) * 0.0025 - (state.economy.interest - 0.09) * 0.002;
    const noise = Math.random() * 0.0075 - 0.00375;
    const meanReversion = (base - current) / base * 0.015;
    const monthlyPct = clamp(macro + noise + meanReversion, -0.009, 0.009);
    const next = current * (1 + monthlyPct);
    state.worldWealth[p.id] = Math.max(base * 0.7, Math.min(base * 1.45, next));
  });
}

function baseSalaryBySector(setor) {
  const map = {
    Varejo: 1200,
    Alimentos: 1300,
    Servicos: 1450,
    Digital: 1800,
    Tecnologia: 2200,
    Industria: 2100,
    Turismo: 1700,
    Financeiro: 2600,
    Conglomerado: 3200
  };
  return Number(map[setor] || 1500);
}

function salaryTierMultiplier(tier) {
  if (tier <= 0) return 0.88;
  if (tier === 1) return 1;
  return 1.18;
}

function automationCostFactor() {
  return clamp(1 - state.research.automation * 0.04, 0.72, 1);
}

function hrTurnoverFactor() {
  return clamp(1 - state.research.hr * 0.08, 0.55, 1);
}

function effectiveClickValue() {
  const combo = currentClickComboMultiplier();
  return Math.floor(state.clickValue * getIncomeMultiplier() * combo);
}

function currentClickComboMultiplier() {
  const streak = safeInt(state.clickCombo?.streak, 0);
  const bonus = Math.min(0.6, streak * 0.02);
  return 1 + bonus;
}

function updateClickCombo() {
  const now = Date.now();
  const last = safeNumber(state.clickCombo?.lastTs, 0);
  if (now - last <= 1200) {
    state.clickCombo.streak = Math.min(30, safeInt(state.clickCombo.streak, 0) + 1);
  } else {
    state.clickCombo.streak = 0;
  }
  state.clickCombo.lastTs = now;
  state.clickCombo.best = Math.max(state.clickCombo.best, state.clickCombo.streak);
}

function companyLevelMultiplier(c) {
  return 1 + c.level * 0.35;
}

function requiredEmployees(c) {
  return c.owned * 3;
}

function staffingRatio(c) {
  const need = requiredEmployees(c);
  if (need <= 0) return 1;
  return c.employees / need;
}

function companyProductivity(c) {
  const staff = staffingRatio(c);
  const salaryMul = salaryTierMultiplier(c.salaryTier);
  return clamp(staff * salaryMul, 0.35, 1.35);
}

function companyIncomePerUnit(c) {
  const tier = clamp(safeInt(c.salaryTier, 1), 0, COMPANY_MARGIN_OPTIONS.length - 1);
  const marginMult = COMPANY_MARGIN_OPTIONS[tier].mult;
  const levelMult = 1 + c.level * 0.25;
  const sectorMult = getSectorMultiplier(c.setor);
  return Math.floor(c.baseIncome * levelMult * marginMult * sectorMult);
}

function companyTotalIncome(c) {
  return companyIncomePerUnit(c) * c.owned;
}

function totalCompanyIncome() {
  return companies.reduce((sum, c) => sum + companyTotalIncome(c), 0);
}

function totalCompanyUnits() {
  return companies.reduce((sum, c) => sum + c.owned, 0);
}

function totalEmployees() {
  return companies.reduce((sum, c) => sum + c.employees, 0);
}

function initParticipationMarket() {
  if (!state.participations || typeof state.participations !== "object") {
    state.participations = { holdings: {}, market: {} };
  }
  if (!state.participations.holdings || typeof state.participations.holdings !== "object") {
    state.participations.holdings = {};
  }
  if (!state.participations.market || typeof state.participations.market !== "object") {
    state.participations.market = {};
  }

  participationCatalog.forEach((c) => {
    const current = state.participations.market[c.id];
    const valuation = Math.max(100000, safeNumber(current?.valuation, c.baseValuation));
    state.participations.market[c.id] = {
      valuation,
      lastValuation: Math.max(100000, safeNumber(current?.lastValuation, valuation))
    };
    state.participations.holdings[c.id] = clamp(safeNumber(state.participations.holdings[c.id], 0), 0, 100);
  });
}

function participationMonthlyIncome(catalogItem) {
  initParticipationMarket();
  const pct = clamp(safeNumber(state.participations.holdings[catalogItem.id], 0), 0, 100) / 100;
  if (pct <= 0) return 0;
  const valuation = Math.max(0, safeNumber(state.participations.market[catalogItem.id]?.valuation, catalogItem.baseValuation));
  const monthlyYield = catalogItem.payoutAnnual / 12;
  return Math.floor(valuation * monthlyYield * pct);
}

function totalParticipationIncome() {
  initParticipationMarket();
  return participationCatalog.reduce((sum, c) => sum + participationMonthlyIncome(c), 0);
}

function totalParticipationValue() {
  initParticipationMarket();
  return participationCatalog.reduce((sum, c) => {
    const pct = clamp(safeNumber(state.participations.holdings[c.id], 0), 0, 100) / 100;
    const valuation = Math.max(0, safeNumber(state.participations.market[c.id]?.valuation, c.baseValuation));
    return sum + valuation * pct;
  }, 0);
}

function participationControlLabel(pct) {
  if (pct >= 100) return "Dono total (100%)";
  if (pct >= 51) return "Socio majoritario";
  if (pct > 0) return "Socio minoritario";
  return "Sem participacao";
}

function buyParticipation(companyId, pctPoints) {
  initParticipationMarket();
  const c = participationCatalog.find((x) => x.id === companyId);
  if (!c) return;
  const buyPct = clamp(Math.floor(safeNumber(pctPoints, 0)), 1, 100);
  const currentPct = clamp(safeNumber(state.participations.holdings[c.id], 0), 0, 100);
  if (currentPct >= 100) {
    setStatus("Voce ja possui 100% dessa empresa.", "warn");
    return;
  }
  const realPct = Math.min(buyPct, 100 - currentPct);
  const valuation = Math.max(0, safeNumber(state.participations.market[c.id]?.valuation, c.baseValuation));
  const cost = Math.floor(valuation * (realPct / 100) * 1.01);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para comprar essa participacao.", "bad");
    return;
  }
  const wasMajor = currentPct >= 51;
  const wasOwner = currentPct >= 100;
  state.money -= cost;
  state.participations.holdings[c.id] = clamp(currentPct + realPct, 0, 100);
  const nowPct = state.participations.holdings[c.id];
  state.stats.spentCompanies += cost;
  logEvent(`Participacao comprada: ${c.nome} +${realPct}% por ${formatMoney(cost)} (total ${nowPct.toFixed(1)}%).`, "ok");
  if (!wasMajor && nowPct >= 51) {
    logEvent(`Controle societario em ${c.nome}: voce virou socio majoritario.`, "ok");
  }
  if (!wasOwner && nowPct >= 100) {
    logEvent(`Controle total em ${c.nome}: agora voce e dono da empresa.`, "ok");
  }
  sfxBuy();
  render();
}

function sellParticipation(companyId, pctPoints) {
  initParticipationMarket();
  const c = participationCatalog.find((x) => x.id === companyId);
  if (!c) return;
  const sellPct = clamp(Math.floor(safeNumber(pctPoints, 0)), 1, 100);
  const currentPct = clamp(safeNumber(state.participations.holdings[c.id], 0), 0, 100);
  if (currentPct <= 0) {
    setStatus("Voce nao possui participacao para vender nessa empresa.", "warn");
    return;
  }
  const realPct = Math.min(sellPct, currentPct);
  const valuation = Math.max(0, safeNumber(state.participations.market[c.id]?.valuation, c.baseValuation));
  const proceeds = Math.floor(valuation * (realPct / 100) * 0.99);
  const wasMajor = currentPct >= 51;
  const wasOwner = currentPct >= 100;
  state.participations.holdings[c.id] = clamp(currentPct - realPct, 0, 100);
  const nowPct = state.participations.holdings[c.id];
  state.money += proceeds;
  state.monthRevenue += proceeds;
  logEvent(`Participacao vendida: ${c.nome} -${realPct}% por ${formatMoney(proceeds)} (restante ${nowPct.toFixed(1)}%).`, "warn");
  if (wasOwner && nowPct < 100) {
    logEvent(`Voce deixou de ser dono total de ${c.nome}.`, "warn");
  }
  if (wasMajor && nowPct < 51) {
    logEvent(`Voce deixou de ser socio majoritario de ${c.nome}.`, "warn");
  }
  sfxBuy();
  render();
}

function updateParticipationMarketMonthly() {
  initParticipationMarket();
  participationCatalog.forEach((c) => {
    const row = state.participations.market[c.id];
    const current = Math.max(100000, safeNumber(row.valuation, c.baseValuation));
    const macro = (state.economy.confidence - 1) * 0.015 - (state.economy.interest - 0.09) * 0.02;
    const drift = c.growthAnnual / 12;
    const noise = (Math.random() * 2 - 1) * c.volatility;
    const monthlyPct = clamp(drift + macro + noise, -0.11, 0.14);
    const next = Math.max(c.baseValuation * 0.35, current * (1 + monthlyPct));
    row.lastValuation = current;
    row.valuation = Math.floor(next);
  });
}

function companyValuationMultiple(c) {
  const map = {
    Varejo: 2.8,
    Alimentos: 3.2,
    Servicos: 3.1,
    Digital: 4.5,
    Tecnologia: 5.3,
    Industria: 3.9,
    Turismo: 3.3,
    Financeiro: 4.4,
    Conglomerado: 4.1
  };
  return Number(map[c.setor] || 3.2);
}

function companyFairValuation(c) {
  if (c.owned <= 0) {
    const annualBase = Math.max(0, safeNumber(c.baseIncome, 0)) * 12;
    const economyAdj = clamp(0.92 + (state.economy.confidence - 1) * 0.35 - (state.economy.interest - 0.09) * 0.25, 0.75, 1.35);
    const reputationAdj = 1 + Math.max(0, state.reputation - 50) / 500;
    const entryValuation = annualBase * companyValuationMultiple(c) * economyAdj * reputationAdj;
    return Math.floor(Math.max(c.baseCost * 0.9, entryValuation));
  }
  const monthly = companyTotalIncome(c);
  if (monthly <= 0) return 0;
  const annualRevenue = monthly * 12;
  const growthBonus = 1 + c.level * 0.045 + Math.max(0, state.reputation - 50) / 380;
  const marketFactor = clamp(safeNumber(c.marketFactor, 1), 0.65, 3.8);
  const valuation = annualRevenue * companyValuationMultiple(c) * growthBonus * marketFactor;
  return Math.floor(Math.max(c.baseCost * c.owned * 0.75, valuation));
}

function updateCompanyValuationsMonthly() {
  companies.forEach((c) => {
    const currentIncome = Math.max(0, companyTotalIncome(c));
    const prev = Math.max(0, safeNumber(c.lastIncome, 0));
    const growth = prev > 0 ? (currentIncome - prev) / prev : 0;
    const macro = (state.economy.confidence - 1) * 0.02 - (state.economy.interest - 0.09) * 0.015;
    const drift = 0.004 + clamp(growth * 0.2, -0.02, 0.035) + macro;
    const noise = Math.random() * 0.018 - 0.009;
    c.marketFactor = clamp(safeNumber(c.marketFactor, 1) * (1 + drift + noise), 0.65, 3.8);
    c.lastIncome = currentIncome;
  });
}

function companySellOfferPerUnit(c) {
  if (c.owned <= 0) return 0;
  const fairPerUnit = companyFairValuation(c) / Math.max(1, c.owned);
  const marketSpread = 0.97 + Math.random() * 0.08;
  const confidenceAdj = clamp(0.97 + (state.economy.confidence - 1) * 0.18, 0.9, 1.08);
  return Math.floor(Math.max(c.baseCost * 0.55, fairPerUnit * marketSpread * confidenceAdj));
}

function companyPayroll(c) {
  return 0;
}

function monthlyPayrollCost() {
  return 0;
}

function ownsRealEstate(defId) {
  return Boolean(state.realEstate?.owned?.[defId]);
}

function isHousePersonalUse(defId) {
  return Boolean(state.realEstate?.personalUse?.[defId]);
}

function realEstatePortfolioValue() {
  return realEstateCatalog.reduce((sum, item) => {
    if (!ownsRealEstate(item.id)) return sum;
    return sum + item.valor;
  }, 0);
}

function realEstateMonthlyIncome() {
  return realEstateCatalog.reduce((sum, item) => {
    if (!ownsRealEstate(item.id)) return sum;
    if (item.tipo === "casa" && isHousePersonalUse(item.id)) return sum;
    return sum + item.aluguelMensal;
  }, 0);
}

function ownedRealEstateCount() {
  return realEstateCatalog.reduce((count, item) => count + (ownsRealEstate(item.id) ? 1 : 0), 0);
}

function monthlyOperationalCost() {
  const variable = Math.floor(totalCompanyIncome() * 0.05);
  return Math.floor(variable * automationCostFactor());
}

function fixedAnnualCosts() {
  const ipva = garageAnnualIpva();
  const aviationAnnual = aviationAnnualDueUsdPreview() * state.forex.usd.rate;
  const loanAnnual = totalMonthlyInstallment() * 12;
  const opsAnnual = monthlyOperationalCost() * 12;
  return Math.floor(ipva + aviationAnnual + loanAnnual + opsAnnual);
}

function farmInvestmentMultiplier() {
  const levels = state.farm?.investments || {};
  const bonus = farmInvestments.reduce((sum, inv) => sum + (safeInt(levels[inv.id], 0) * inv.bonus), 0);
  return 1 + bonus;
}

function farmMonthlyIncome() {
  const hectares = Math.max(0, safeInt(state.farm?.hectares, 0));
  if (hectares <= 0) return 0;
  const invested = hectares * FARM_HECTARE_PRICE;
  return Math.floor(invested * FARM_YIELD_PCT * farmInvestmentMultiplier());
}

function calcFarmInvestmentCost(invId) {
  const inv = farmInvestments.find((x) => x.id === invId);
  if (!inv) return 0;
  const level = safeInt(state.farm?.investments?.[invId], 0);
  return Math.floor(inv.baseCost * Math.pow(1.65, level));
}

function buyFarmInvestment(invId) {
  const inv = farmInvestments.find((x) => x.id === invId);
  if (!inv) return;
  const cost = calcFarmInvestmentCost(invId);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para investir na fazenda.", "bad");
    return;
  }
  state.money -= cost;
  state.farm.investments[invId] = safeInt(state.farm.investments[invId], 0) + 1;
  logEvent(`Investimento agro: ${inv.nome} (Nv. ${state.farm.investments[invId]}).`, "ok");
  sfxBuy();
  render();
}

function buyHectares() {
  const qty = Math.floor(safeNumber(el.farmHectaresInput?.value, 0));
  if (!Number.isFinite(qty) || qty <= 0) {
    setStatus("Informe quantos hectares deseja comprar.", "warn");
    return;
  }
  const cost = qty * FARM_HECTARE_PRICE;
  if (state.money < cost) {
    setStatus("Saldo insuficiente para comprar hectares.", "bad");
    return;
  }
  state.money -= cost;
  state.farm.hectares += qty;
  if (el.farmHectaresInput) el.farmHectaresInput.value = "";
  logEvent(`Compra de terra: +${qty} ha por ${formatMoney(cost)}.`, "ok");
  sfxBuy();
  render();
}

function buyCattle(cattleId, qty) {
  const item = cattleCatalog.find((x) => x.id === cattleId);
  if (!item) return;
  const amount = Math.floor(safeNumber(qty, 0));
  if (!Number.isFinite(amount) || amount <= 0) {
    setStatus("Informe a quantidade de gado.", "warn");
    return;
  }
  const cost = amount * item.buy;
  if (state.money < cost) {
    setStatus("Saldo insuficiente para comprar gado.", "bad");
    return;
  }
  state.money -= cost;
  state.farm.cattle.push({
    id: state.farm.nextCattleId++,
    cattleId: item.id,
    nome: item.nome,
    qty: amount,
    buyPrice: item.buy,
    sellPrice: item.sell
  });
  logEvent(`Gado comprado: ${amount}x ${item.nome} por ${formatMoney(cost)}.`, "ok");
  sfxBuy();
  render();
}

function processFarmCattleSales() {
  if (!state.farm?.cattle?.length) return 0;
  const revenue = state.farm.cattle.reduce((sum, batch) => sum + batch.qty * batch.sellPrice, 0);
  state.farm.cattle = [];
  if (revenue > 0) {
    state.money += revenue;
    state.monthRevenue += revenue;
    logEvent(`Venda automatica de gado: +${formatMoney(revenue)}.`, "ok");
  }
  return revenue;
}

function renderFarm() {
  if (!el.farmName) return;
  const name = (state.farm.name || "Sem nome").trim();
  const hectares = Math.max(0, safeInt(state.farm.hectares, 0));
  const income = farmMonthlyIncome();
  el.farmName.textContent = name;
  el.farmHectares.textContent = `${hectares.toLocaleString("pt-BR")} ha`;
  el.farmIncome.textContent = `${formatMoney(income)}/mes`;
  el.farmHectarePrice.textContent = formatMoney(FARM_HECTARE_PRICE);

  if (el.cattleList) {
    el.cattleList.innerHTML = "";
    cattleCatalog.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${escapeHtml(item.nome)}</div>
        <div class="meta">Compra: ${formatMoney(item.buy)} | Venda automatica: ${formatMoney(item.sell)}</div>
        <div class="btn-row">
          <input class="input-mini" type="number" min="1" step="1" placeholder="Qtd" />
          <button class="btn">Comprar gado</button>
        </div>
      `;
      const input = card.querySelector("input");
      card.querySelector("button").addEventListener("click", () => buyCattle(item.id, input.value));
      el.cattleList.appendChild(card);
    });
  }

  if (el.farmInvestList) {
    el.farmInvestList.innerHTML = "";
    farmInvestments.forEach((inv) => {
      const level = safeInt(state.farm.investments[inv.id], 0);
      const cost = calcFarmInvestmentCost(inv.id);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${escapeHtml(inv.nome)} (Nv. ${level})</div>
        <div class="meta">Bonus renda: +${Math.round(inv.bonus * 100)}% por nivel</div>
        <div class="meta">Custo: ${formatMoney(cost)}</div>
        <button class="btn" ${state.money < cost ? "disabled" : ""}>Investir</button>
      `;
      card.querySelector("button").addEventListener("click", () => buyFarmInvestment(inv.id));
      el.farmInvestList.appendChild(card);
    });
  }
}

function recruitmentCost(c) {
  return Math.floor(baseSalaryBySector(c.setor) * 0.7);
}

function totalMonthlyInstallment() {
  return state.loan.monthsLeft > 0 ? state.loan.installment : 0;
}

function requestLoan(amount, months, annualRate, label) {
  if (state.loan.monthsLeft > 0 || state.loan.principalRemaining > 0) {
    setStatus("Ja existe emprestimo ativo. Quite o atual antes de contratar outro.", "warn");
    return;
  }
  const score = 1 + state.level * 0.03 + state.prestigePoints * 0.08 + state.reputation / 250 + state.research.branding * 0.03;
  const granted = Math.floor(amount * score);
  const totalPay = Math.floor(granted * (1 + annualRate * (months / 12)));
  const installment = Math.ceil(totalPay / months);

  state.loan = {
    principalRemaining: totalPay,
    installment,
    monthsLeft: months,
    annualRate,
    label
  };
  state.money += granted;
  state.stats.loanReceived += granted;
  logEvent(`Emprestimo aprovado (${label}): +${formatMoney(granted)} em ${months}x de ${formatMoney(installment)}.`, "ok");
  setStatus("Emprestimo contratado.", "ok");
  sfxBuy();
  render();
}

function updateForexRates() {
  const usdPressure = (state.economy.interest - 0.09) * 0.25 + (1 - state.economy.confidence) * 0.2;
  const eurPressure = (state.economy.interest - 0.09) * 0.2 + (1 - state.economy.confidence) * 0.15;
  const usdNoise = Math.random() * 0.24 - 0.12;
  const eurNoise = Math.random() * 0.2 - 0.1;
  state.forex.usd.rate = clamp(state.forex.usd.rate + usdNoise + usdPressure, state.forex.usd.min, state.forex.usd.max);
  state.forex.eur.rate = clamp(state.forex.eur.rate + eurNoise + eurPressure, state.forex.eur.min, state.forex.eur.max);
}

function liquidateForexForAmount(targetBrl) {
  let remaining = Math.max(0, safeNumber(targetBrl, 0));
  let paid = 0;
  let soldUsd = 0;
  let soldEur = 0;

  if (remaining > 0 && state.forex.usd.balance > 0) {
    const usdNeeded = remaining / state.forex.usd.rate;
    const usdSold = Math.min(state.forex.usd.balance, usdNeeded);
    const brlFromUsd = usdSold * state.forex.usd.rate;
    state.forex.usd.balance -= usdSold;
    paid += brlFromUsd;
    remaining -= brlFromUsd;
    soldUsd = usdSold;
  }

  if (remaining > 0 && state.forex.eur.balance > 0) {
    const eurNeeded = remaining / state.forex.eur.rate;
    const eurSold = Math.min(state.forex.eur.balance, eurNeeded);
    const brlFromEur = eurSold * state.forex.eur.rate;
    state.forex.eur.balance -= eurSold;
    paid += brlFromEur;
    remaining -= brlFromEur;
    soldEur = eurSold;
  }

  if (remaining < 0.005) remaining = 0;
  state.forex.usd.balance = Math.max(0, state.forex.usd.balance);
  state.forex.eur.balance = Math.max(0, state.forex.eur.balance);
  return { paid, remaining, soldUsd, soldEur };
}

function processSavingsMonth() {
  const balance = Math.max(0, safeNumber(state.savings?.balance, 0));
  const rate = clamp(safeNumber(state.savings?.monthlyRate, 0.01), 0, 0.05);
  if (balance <= 0 || rate <= 0) {
    state.savings.lastYield = 0;
    return 0;
  }
  const yieldValue = Math.floor(balance * rate);
  state.savings.lastYield = yieldValue;
  state.savings.balance = balance + yieldValue;
  state.savings.totalYield = Math.max(0, safeNumber(state.savings.totalYield, 0)) + yieldValue;
  return yieldValue;
}

function depositSavings() {
  const amount = Math.floor(safeNumber(el.savingsAmountInput?.value, 0));
  if (amount <= 0) {
    setStatus("Informe um valor valido para depositar na poupanca.", "warn");
    return;
  }
  if (state.money < amount) {
    setStatus("Saldo BRL insuficiente para deposito na poupanca.", "bad");
    return;
  }
  state.money -= amount;
  state.savings.balance = Math.max(0, safeNumber(state.savings.balance, 0)) + amount;
  if (el.savingsAmountInput) el.savingsAmountInput.value = "";
  logEvent(`Poupanca: deposito de ${formatMoney(amount)}.`, "ok");
  render();
}

function withdrawSavings() {
  const amount = Math.floor(safeNumber(el.savingsAmountInput?.value, 0));
  if (amount <= 0) {
    setStatus("Informe um valor valido para retirar da poupanca.", "warn");
    return;
  }
  const balance = Math.max(0, safeNumber(state.savings.balance, 0));
  if (balance <= 0) {
    setStatus("Nao ha saldo na poupanca para saque.", "warn");
    return;
  }
  const withdrawn = Math.min(balance, amount);
  state.savings.balance = balance - withdrawn;
  state.money += withdrawn;
  if (el.savingsAmountInput) el.savingsAmountInput.value = "";
  logEvent(`Poupanca: saque de ${formatMoney(withdrawn)}.`, "ok");
  render();
}

function buyForex(code) {
  const isUsd = code === "USD";
  const wallet = isUsd ? state.forex.usd : state.forex.eur;
  const input = isUsd ? el.usdBuyInput : el.eurBuyInput;
  const label = isUsd ? "USD" : "EUR";
  const brlAmount = Math.floor(safeNumber(input.value, 0));

  if (brlAmount <= 0) {
    setStatus(`Informe um valor valido em BRL para comprar ${label}.`, "warn");
    return;
  }
  if (state.money < brlAmount) {
    setStatus("Saldo insuficiente em BRL.", "bad");
    return;
  }

  const units = brlAmount / wallet.rate;
  state.money -= brlAmount;
  wallet.balance += units;
  input.value = "";
  logEvent(`Compra ${label}: ${isUsd ? formatUsd(units) : formatEur(units)} por ${formatMoney(brlAmount)}.`);
  sfxBuy();
  render();
}

function sellAllForex(code) {
  const isUsd = code === "USD";
  const wallet = isUsd ? state.forex.usd : state.forex.eur;
  const label = isUsd ? "USD" : "EUR";
  if (wallet.balance <= 0) {
    setStatus(`Sem saldo de ${label} para vender.`, "warn");
    return;
  }
  const units = wallet.balance;
  const brlBack = units * wallet.rate;
  wallet.balance = 0;
  state.money += brlBack;
  state.monthRevenue += brlBack;
  state.stats.fxRevenue += brlBack;
  logEvent(`Venda ${label}: ${isUsd ? formatUsd(units) : formatEur(units)} por ${formatMoney(brlBack)}.`, "ok");
  sfxBuy();
  render();
}

function processLoanPayment() {
  if (state.loan.monthsLeft <= 0 || state.loan.principalRemaining <= 0) return 0;
  const installment = state.loan.installment;
  if (state.money >= installment) {
    const interestPart = Math.floor(state.loan.principalRemaining * (state.loan.annualRate / 12));
    state.money -= installment;
    state.loan.principalRemaining = Math.max(0, state.loan.principalRemaining - installment);
    state.loan.monthsLeft -= 1;
    state.stats.interestPaid += interestPart;
    if (state.loan.monthsLeft <= 0 || state.loan.principalRemaining <= 0) {
      state.loan = { principalRemaining: 0, installment: 0, monthsLeft: 0, annualRate: 0, label: "" };
      logEvent("Emprestimo quitado com sucesso.", "ok");
    }
    return installment;
  }

  const penalty = Math.floor(state.loan.principalRemaining * 0.03) + 500;
  state.loan.principalRemaining += penalty;
  state.economy.confidence = clamp(state.economy.confidence - 0.05, 0.75, 1.35);
  logEvent(`Atraso de parcela! Multa de ${formatMoney(penalty)} aplicada ao saldo do emprestimo.`, "warn");
  return 0;
}

function processTurnover() {
  // Employee turnover removed in simplified company model.
}

function effectiveCompanyIncome() {
  return Math.floor((totalCompanyIncome() + totalParticipationIncome()) * getIncomeMultiplier());
}

function pushSafEvent(text, type = "") {
  const cls = type ? `class="${type}"` : "";
  state.saf.eventFeed.unshift(`<div ${cls}>${escapeHtml(text)}</div>`);
  state.saf.eventFeed = state.saf.eventFeed.slice(0, 40);
}

function safNetWorth() {
  if (!state.saf.owned) return 0;
  const ownedShare = clamp(1 - safeNumber(state.saf.safSoldPct, 0) / 100, 0, 1);
  return Math.max(0, safeNumber(state.saf.valuation, 0) * ownedShare - safeNumber(state.saf.debt, 0));
}

function safStructureCost(structureId) {
  const def = SAF_STRUCTURE_DEFS.find((x) => x.id === structureId);
  if (!def) return Number.MAX_SAFE_INTEGER;
  const level = Math.max(0, safeInt(state.saf.structures?.[structureId], 0));
  const pressureFactor = 1 + safeNumber(state.saf.pressure, 50) / 200;
  return Math.floor(def.baseCost * Math.pow(1.65, level) * pressureFactor);
}

function buySafClub(profileId) {
  if (state.saf.owned) {
    setStatus("Voce ja controla uma SAF. Venda participacao ou expanda com clube satelite.", "warn");
    return;
  }
  const profile = SAF_CLUB_PROFILES.find((p) => p.id === profileId);
  if (!profile) return;
  if (state.money < profile.buyPrice) {
    setStatus(`Saldo insuficiente para comprar ${profile.nome}.`, "warn");
    return;
  }
  state.money -= profile.buyPrice;
  state.saf = defaultSafState();
  state.saf.owned = true;
  state.saf.profileId = profile.id;
  state.saf.clubName = profile.nome;
  state.saf.league = profile.league;
  state.saf.region = profile.region;
  state.saf.purchasePrice = profile.buyPrice;
  state.saf.debt = profile.debt;
  state.saf.reputation = profile.reputation;
  state.saf.fanMood = clamp(72 - profile.pressure * 0.25, 20, 85);
  state.saf.pressure = profile.pressure;
  state.saf.valuation = Math.floor(profile.buyPrice * 1.04);
  state.saf.sponsorsLevel = profile.league === "Europa" ? 1 : 0;
  state.saf.tvLevel = profile.league === "Serie A" || profile.league === "Europa" ? 1 : 0;
  state.saf.competitions = createSafCompetitions();
  state.saf.competitions.seasonYear = state.year;
  const tier = profile.region === "Brasil" ? (profile.league === "Serie A" ? "A" : profile.league === "Serie B" ? "B" : "C") : "EU";
  const meta = safLeagueMetaByTier(tier, profile.region);
  state.saf.competitions.league.tier = meta.tier;
  state.saf.competitions.league.roundsTotal = meta.roundsTotal;
  state.saf.competitions.league.name = meta.name;
  state.saf.competitions.libertadores.qualified = profile.region === "Europa" || (profile.region === "Brasil" && (profile.league === "Serie A" || profile.league === "Serie B"));
  state.reputation = clamp(state.reputation + 2, 0, 100);
  pushSafEvent(`Compra concluida: ${profile.nome} por ${formatMoney(profile.buyPrice)}.`, "ok");
  logEvent(`Modo SAF: compra de ${profile.nome}. Divida herdada ${formatMoney(profile.debt)}.`, "warn");
  setStatus(`Voce assumiu a ${profile.nome}.`, "ok");
  render();
}

function buySafStructure(structureId) {
  if (!state.saf.owned) return;
  const def = SAF_STRUCTURE_DEFS.find((x) => x.id === structureId);
  if (!def) return;
  const cost = safStructureCost(structureId);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para esse investimento.", "warn");
    return;
  }
  state.money -= cost;
  state.saf.structures[structureId] = Math.max(0, safeInt(state.saf.structures[structureId], 0)) + 1;
  state.saf.reputation = clamp(state.saf.reputation + def.repBoost, 0, 100);
  state.saf.valuation = Math.floor(state.saf.valuation * (1 + def.revenueBoost * 0.55));
  pushSafEvent(`Estrutura: ${def.nome} melhorado para nivel ${state.saf.structures[structureId]}.`, "ok");
  setStatus(`Investimento concluido em ${def.nome}.`, "ok");
  render();
}

function safCreatePlayer(kind) {
  const youth = kind === "youth";
  const media = kind === "media";
  const basePot = youth ? 74 : media ? 78 : 68;
  const pot = clamp(Math.floor(basePot + Math.random() * (youth ? 20 : 16)), 60, 95);
  const age = youth ? 15 + Math.floor(Math.random() * 3) : 18 + Math.floor(Math.random() * 12);
  const mediaScore = media ? 70 + Math.floor(Math.random() * 26) : Math.floor(Math.random() * 55);
  const val = Math.floor((pot * pot) * (media ? 23000 : youth ? 12000 : 17000));
  return {
    id: `p_${Date.now()}_${Math.floor(Math.random() * 9999)}`,
    age,
    potential: pot,
    mediaScore,
    value: Math.max(800000, val),
    developed: false
  };
}

function safBuyProspect() {
  if (!state.saf.owned) return;
  const scout = safeInt(state.saf.structures.scout, 0);
  const cost = Math.floor((6000000 + Math.random() * 15000000) * (1 - Math.min(0.35, scout * 0.03)));
  if (state.money < cost) {
    setStatus("Saldo insuficiente para contratar promessa.", "warn");
    return;
  }
  const p = safCreatePlayer("prospect");
  state.money -= cost;
  p.value = Math.floor(p.value * (1 + Math.random() * 0.08));
  state.saf.roster.push(p);
  state.saf.valuation += Math.floor(cost * 0.45);
  pushSafEvent(`Mercado: promessa contratada por ${formatMoney(cost)} (potencial ${p.potential}).`);
  render();
}

function safBuyMediaPlayer() {
  if (!state.saf.owned) return;
  const cost = Math.floor(35000000 + Math.random() * 140000000);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para jogador midiatico.", "warn");
    return;
  }
  const p = safCreatePlayer("media");
  state.money -= cost;
  p.value = Math.floor(cost * (0.85 + Math.random() * 0.4));
  state.saf.roster.push(p);
  state.saf.sponsorsLevel += 1;
  state.saf.reputation = clamp(state.saf.reputation + 3, 0, 100);
  pushSafEvent(`Mercado: jogador midiatico contratado por ${formatMoney(cost)}.`);
  render();
}

function safSellBestOffer() {
  if (!state.saf.owned || state.saf.roster.length === 0) {
    setStatus("Sem atletas para negociar.", "warn");
    return;
  }
  state.saf.roster.sort((a, b) => b.value - a.value);
  const player = state.saf.roster.shift();
  if (!player) return;
  const rep = state.saf.reputation / 100;
  const offer = Math.floor(player.value * (0.9 + Math.random() * 0.45 + rep * 0.2));
  state.money += offer;
  state.monthRevenue += offer;
  state.saf.valuation = Math.max(1000000, Math.floor(state.saf.valuation + offer * 0.12 - player.value * 0.25));
  pushSafEvent(`Venda: atleta negociado por ${formatMoney(offer)}.`);
  logEvent(`SAF vendeu atleta por ${formatMoney(offer)}.`, "ok");
  render();
}

function safInvestInYouth(playerId) {
  if (!state.saf.owned) return;
  const idx = state.saf.youthPool.findIndex((p) => p.id === playerId);
  if (idx < 0) {
    setStatus("Jogador da base nao encontrado.", "warn");
    return;
  }
  const p = state.saf.youthPool[idx];
  const cost = Math.floor(5000000 + p.potential * 120000);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para desenvolver esse jovem.", "warn");
    return;
  }
  state.money -= cost;
  p.potential = clamp(p.potential + 3 + Math.floor(Math.random() * 4), 60, 98);
  p.value = Math.floor(p.value * (1.45 + Math.random() * 0.25));
  p.developed = true;
  state.saf.roster.push(p);
  state.saf.youthPool.splice(idx, 1);
  state.saf.reputation = clamp(state.saf.reputation + 2, 0, 100);
  state.saf.valuation += Math.floor(cost * 0.85);
  pushSafEvent(`Base: jovem promovido (potencial ${p.potential}) apos investimento de ${formatMoney(cost)}.`);
  render();
}

function safTakeLoan() {
  if (!state.saf.owned) return;
  const profile = SAF_CLUB_PROFILES.find((p) => p.id === state.saf.profileId);
  const boost = Math.floor((profile?.buyPrice || 250000000) * 0.18);
  state.money += boost;
  state.saf.debt += Math.floor(boost * 1.18);
  state.saf.pressure = clamp(state.saf.pressure + 6, 0, 100);
  pushSafEvent(`Financeiro: emprestimo SAF recebido ${formatMoney(boost)}.`, "warn");
  render();
}

function safSellShare(pctPoints) {
  if (!state.saf.owned) return;
  const current = safeNumber(state.saf.safSoldPct, 0);
  if (current >= 90) {
    setStatus("Limite de venda parcial atingido (90%).", "warn");
    return;
  }
  const pct = clamp(pctPoints, 1, 40);
  const available = Math.max(0, 90 - current);
  const applied = Math.min(available, pct);
  if (applied <= 0) return;
  const received = Math.floor(state.saf.valuation * (applied / 100) * 0.98);
  state.saf.safSoldPct = current + applied;
  state.money += received;
  state.saf.pressure = clamp(state.saf.pressure - 3, 0, 100);
  pushSafEvent(`Capitalizacao: venda de ${applied}% da SAF por ${formatMoney(received)}.`);
  render();
}

function safAttractInvestor(type) {
  if (!state.saf.owned) return;
  const key = type === "arab" ? "arab" : "us";
  if (state.saf.investors[key]) {
    setStatus("Investidor ja captado.", "warn");
    return;
  }
  const minRep = key === "arab" ? 58 : 52;
  if (state.saf.reputation < minRep) {
    setStatus(`Reputacao da SAF abaixo do minimo (${minRep}).`, "warn");
    return;
  }
  const amount = Math.floor(state.saf.valuation * (key === "arab" ? 0.22 : 0.14));
  state.saf.investors[key] = true;
  state.money += amount;
  state.saf.valuation = Math.floor(state.saf.valuation * (key === "arab" ? 1.18 : 1.12));
  state.saf.fanMood = clamp(state.saf.fanMood + (key === "arab" ? -4 : 2), 0, 100);
  pushSafEvent(`Investimento externo: aporte ${formatMoney(amount)} (${key === "arab" ? "arabe" : "americano"}).`, "ok");
  render();
}

function safOpenIpo() {
  if (!state.saf.owned) return;
  if (state.saf.investors.ipo) {
    setStatus("A SAF ja abriu capital.", "warn");
    return;
  }
  if (state.saf.reputation < 65 || state.saf.valuation < 500000000) {
    setStatus("Exigencia para IPO: reputacao >= 65 e valor >= R$ 500 mi.", "warn");
    return;
  }
  const raised = Math.floor(state.saf.valuation * 0.25);
  state.saf.investors.ipo = true;
  state.saf.safSoldPct = clamp(state.saf.safSoldPct + 15, 0, 90);
  state.money += raised;
  state.saf.tvLevel += 1;
  state.saf.valuation = Math.floor(state.saf.valuation * 1.12);
  pushSafEvent(`Bolsa ficticia: IPO realizado com captacao de ${formatMoney(raised)}.`, "ok");
  render();
}

function safCreateEuropeBranch() {
  if (!state.saf.owned) return;
  if (state.saf.europeBranch) {
    setStatus("Filial europeia ja ativa.", "warn");
    return;
  }
  const cost = Math.floor(Math.max(220000000, state.saf.valuation * 0.2));
  if (state.money < cost) {
    setStatus("Saldo insuficiente para abrir filial europeia.", "warn");
    return;
  }
  state.money -= cost;
  state.saf.europeBranch = true;
  state.saf.reputation = clamp(state.saf.reputation + 6, 0, 100);
  state.saf.valuation = Math.floor(state.saf.valuation * 1.14);
  pushSafEvent(`Expansao: filial europeia criada por ${formatMoney(cost)}.`);
  render();
}

function safBuySatelliteClub() {
  if (!state.saf.owned) return;
  if (state.saf.networkClubs >= 2) {
    setStatus("Rede no limite: voce ja controla 3 clubes no total.", "warn");
    return;
  }
  const cost = Math.floor(140000000 + state.saf.networkClubs * 120000000);
  if (state.money < cost) {
    setStatus("Saldo insuficiente para comprar clube satelite.", "warn");
    return;
  }
  state.money -= cost;
  state.saf.networkClubs += 1;
  state.saf.valuation += Math.floor(cost * 0.9);
  state.saf.reputation = clamp(state.saf.reputation + 3, 0, 100);
  pushSafEvent(`Grupo de clubes: novo satelite adquirido por ${formatMoney(cost)}.`);
  render();
}

function safMaybeRevealYouth() {
  if (!state.saf.owned) return;
  const baseLv = safeInt(state.saf.structures.base, 0);
  const scoutLv = safeInt(state.saf.structures.scout, 0);
  const chance = 0.12 + baseLv * 0.035 + scoutLv * 0.025;
  if (Math.random() > chance || state.saf.youthPool.length >= 8) return;
  const kid = safCreatePlayer("youth");
  state.saf.youthPool.push(kid);
  pushSafEvent(`Base: jovem de ${kid.age} anos apareceu (potencial ${kid.potential}).`);
}

function safRandomEventMonth() {
  if (!state.saf.owned || Math.random() > 0.3) return;
  const events = [
    () => {
      const hit = Math.floor(state.saf.valuation * 0.012);
      state.money = Math.max(0, state.money - hit);
      state.saf.fanMood = clamp(state.saf.fanMood - 5, 0, 100);
      pushSafEvent(`Crise da torcida: custo emergencial de ${formatMoney(hit)}.`, "bad");
    },
    () => {
      const gain = Math.floor(state.saf.valuation * 0.018);
      state.money += gain;
      state.saf.reputation = clamp(state.saf.reputation + 2, 0, 100);
      pushSafEvent(`Novo patrocinador: entrada de ${formatMoney(gain)}.`, "ok");
    },
    () => {
      const cost = Math.floor(state.saf.valuation * 0.01);
      state.money = Math.max(0, state.money - cost);
      state.saf.reputation = clamp(state.saf.reputation - 4, 0, 100);
      pushSafEvent(`Investigacao financeira: multa de ${formatMoney(cost)} e queda de reputacao.`, "warn");
    },
    () => {
      state.saf.reputation = clamp(state.saf.reputation - 3, 0, 100);
      state.saf.pressure = clamp(state.saf.pressure + 7, 0, 100);
      pushSafEvent("Polemica com jogador: imprensa pressiona a SAF.", "warn");
    },
    () => {
      if (state.saf.roster.length === 0) return;
      state.saf.roster.sort((a, b) => b.value - a.value);
      const p = state.saf.roster[0];
      const offer = Math.floor(p.value * 1.6);
      state.money += offer;
      state.saf.roster.shift();
      state.saf.valuation += Math.floor(offer * 0.08);
      pushSafEvent(`Proposta inesperada aceita: +${formatMoney(offer)}.`, "ok");
    }
  ];
  const pick = events[Math.floor(Math.random() * events.length)];
  if (pick) pick();
}

function safCompetitionActionAvailable() {
  return monthStamp() !== String(state.saf.competitions?.lastActionMonthStamp || "");
}

function safStrengthScore() {
  const saf = state.saf;
  const rosterQuality = saf.roster.reduce((sum, p) => sum + (safeNumber(p.potential, 70) / 100), 0);
  return 0.35
    + saf.reputation / 150
    + safeInt(saf.structures.ct, 0) * 0.045
    + safeInt(saf.structures.base, 0) * 0.04
    + safeInt(saf.structures.medico, 0) * 0.03
    + safeInt(saf.structures.scout, 0) * 0.04
    + Math.min(0.45, rosterQuality / 30);
}

function safTakeCompetitionAction() {
  state.saf.competitions.lastActionMonthStamp = monthStamp();
}

function safRecordTrophy(name) {
  const year = state.year;
  state.saf.trophyHistory.unshift({ year, name });
  state.saf.trophyHistory = state.saf.trophyHistory.slice(0, 24);
}

function safMaybeStartNewSeason() {
  const comp = state.saf.competitions;
  if (state.month !== 1) return;
  if (comp.seasonYear === state.year) return;
  const prevLeague = comp.league;
  let nextTier = String(prevLeague.tier || "A");
  if (state.saf.region === "Brasil" && prevLeague.finished) {
    if (nextTier === "A" && prevLeague.position >= 17) nextTier = "B";
    else if (nextTier === "B" && prevLeague.position <= 4) nextTier = "A";
    else if (nextTier === "B" && prevLeague.position >= 17) nextTier = "C";
    else if (nextTier === "C" && prevLeague.position <= 4) nextTier = "B";
  }
  const qualifiedLiberta = state.saf.region === "Europa"
    ? true
    : prevLeague.finished && String(prevLeague.tier || "A") === "A" && prevLeague.position <= 6;
  state.saf.competitions = createSafCompetitions();
  state.saf.competitions.seasonYear = state.year;
  const meta = safLeagueMetaByTier(nextTier, state.saf.region);
  state.saf.competitions.league.tier = meta.tier;
  state.saf.competitions.league.name = meta.name;
  state.saf.competitions.league.roundsTotal = meta.roundsTotal;
  state.saf.competitions.libertadores.qualified = state.saf.region === "Europa" || (state.saf.region === "Brasil" && qualifiedLiberta);
  if (state.saf.region === "Brasil" && prevLeague.finished) {
    if (nextTier !== String(prevLeague.tier || "A")) {
      const moveLabel = nextTier < String(prevLeague.tier || "A") ? "Acesso" : "Rebaixamento";
      pushSafEvent(`${moveLabel} confirmado: nova temporada na ${meta.name}.`, nextTier < String(prevLeague.tier || "A") ? "ok" : "warn");
    } else {
      pushSafEvent(`Nova temporada iniciada (${state.year}) na ${meta.name}.`);
    }
  } else {
    pushSafEvent(`Nova temporada iniciada (${state.year}) na ${meta.name}.`);
  }
}

function safPlayLeagueRound() {
  if (!state.saf.owned) return;
  const comp = state.saf.competitions;
  if (!safCompetitionActionAvailable()) {
    setStatus("Voce ja disputou uma partida de competicao neste mes.", "warn");
    return;
  }
  if (comp.league.finished) {
    setStatus("Liga nacional ja encerrada nesta temporada.", "warn");
    return;
  }
  const str = safStrengthScore();
  const drawChance = clamp(0.18 + (1 - str) * 0.1, 0.12, 0.28);
  const winChance = clamp(0.26 + str * 0.42, 0.2, 0.78);
  const roll = Math.random();
  const gf = Math.max(0, Math.floor(Math.random() * 3 + str * 2));
  const ga = Math.max(0, Math.floor(Math.random() * 3 + (1 - str) * 1.8));
  let result = "D";
  if (roll <= winChance) {
    comp.league.points += 3;
    comp.league.wins += 1;
    result = "V";
    state.money += 700000;
  } else if (roll <= winChance + drawChance) {
    comp.league.points += 1;
    comp.league.draws += 1;
    result = "E";
    state.money += 300000;
  } else {
    comp.league.losses += 1;
    result = "D";
  }
  comp.league.roundsPlayed += 1;
  comp.league.goalsFor += gf;
  comp.league.goalsAgainst += ga;
  const progress = comp.league.roundsPlayed / Math.max(1, comp.league.roundsTotal);
  const performance = comp.league.points / Math.max(1, comp.league.roundsPlayed * 3);
  comp.league.position = clamp(Math.round(20 - performance * 19 + (1 - progress) * (Math.random() * 4 - 2)), 1, 20);
  state.saf.reputation = clamp(state.saf.reputation + (result === "V" ? 1.2 : result === "E" ? 0.2 : -1), 0, 100);
  state.saf.fanMood = clamp(state.saf.fanMood + (result === "V" ? 2 : result === "E" ? 0 : -2), 0, 100);
  pushSafEvent(`Liga: rodada ${comp.league.roundsPlayed}/${comp.league.roundsTotal} (${result}) | placar ${gf}x${ga}.`);
  safTakeCompetitionAction();

  if (comp.league.roundsPlayed >= comp.league.roundsTotal) {
    comp.league.finished = true;
    const finalPrize = safLeaguePrizeByTier(String(comp.league.tier || "A"), comp.league.position);
    state.money += finalPrize;
    if (comp.league.position === 1 && (state.saf.region === "Brasil" || state.saf.region === "Europa")) {
      if (state.saf.region === "Brasil" && String(comp.league.tier || "A") === "A") {
        state.saf.trophies.brasileirao += 1;
        safRecordTrophy("Brasileirao");
      }
      state.saf.titles += 1;
      state.saf.valuation = Math.floor(state.saf.valuation * 1.12);
      if (state.saf.region === "Brasil" && String(comp.league.tier || "A") === "A") {
        state.saf.competitions.libertadores.qualified = true;
      }
      pushSafEvent(`Campeao da ${comp.league.name}! Premiacao final ${formatMoney(finalPrize)}.`, "ok");
    } else {
      pushSafEvent(`Liga encerrada em ${comp.league.position}o lugar. Premiacao ${formatMoney(finalPrize)}.`);
      if (state.saf.region === "Brasil" && String(comp.league.tier || "A") === "A" && comp.league.position <= 6) {
        state.saf.competitions.libertadores.qualified = true;
      }
    }
  }
  render();
}

function safPlayCupMatch(cupId) {
  if (!state.saf.owned) return;
  const comp = state.saf.competitions;
  if (!safCompetitionActionAvailable()) {
    setStatus("Voce ja disputou uma partida de competicao neste mes.", "warn");
    return;
  }
  const isLiberta = cupId === "libertadores";
  const target = isLiberta ? comp.libertadores : comp.copa;
  const continentalLabel = state.saf.region === "Europa" ? "Champions" : "Libertadores";
  if (isLiberta && !target.qualified) {
    setStatus(`Seu clube nao esta classificado para ${continentalLabel} nesta temporada.`, "warn");
    return;
  }
  if (!target.alive || target.finished) {
    setStatus("Competicao ja encerrada nesta temporada.", "warn");
    return;
  }
  const phaseLabel = target.phases[target.phase] || "Fase";
  const str = safStrengthScore();
  const baseWin = isLiberta ? 0.44 : 0.5;
  const winChance = clamp(baseWin + (str - 0.8) * 0.26, 0.2, 0.82);
  const won = Math.random() <= winChance;
  safTakeCompetitionAction();

  if (!won) {
    target.alive = false;
    target.finished = true;
    state.saf.reputation = clamp(state.saf.reputation - (isLiberta ? 2.2 : 1.4), 0, 100);
    pushSafEvent(`${isLiberta ? continentalLabel : "Copa do Brasil"}: eliminado na fase ${phaseLabel}.`, "bad");
    render();
    return;
  }

  const reward = Math.floor((isLiberta ? 4500000 : 2600000) * (1 + target.phase * 0.42));
  state.money += reward;
  state.saf.reputation = clamp(state.saf.reputation + (isLiberta ? 1.6 : 1.1), 0, 100);
  target.phase += 1;
  pushSafEvent(`${isLiberta ? continentalLabel : "Copa do Brasil"}: classificou na fase ${phaseLabel} (+${formatMoney(reward)}).`, "ok");

  if (target.phase >= target.phases.length) {
    target.finished = true;
    target.alive = false;
    if (isLiberta) {
      if (state.saf.region === "Europa") {
        state.saf.trophies.champions += 1;
        state.saf.champions += 1;
        state.saf.valuation = Math.floor(state.saf.valuation * 1.19);
        state.money += 65000000;
        safRecordTrophy("Champions");
        pushSafEvent(`Titulo continental: Champions conquistada!`, "ok");
      } else {
        state.saf.trophies.libertadores += 1;
        state.saf.libertadores += 1;
        state.saf.valuation = Math.floor(state.saf.valuation * 1.16);
        state.money += 45000000;
        safRecordTrophy("Libertadores");
        pushSafEvent(`Titulo continental: Libertadores conquistada!`, "ok");
      }
    } else {
      state.saf.trophies.copaDoBrasil += 1;
      state.saf.titles += 1;
      state.saf.valuation = Math.floor(state.saf.valuation * 1.08);
      state.money += 22000000;
      safRecordTrophy("Copa do Brasil");
      pushSafEvent(`Campeao da Copa do Brasil!`, "ok");
    }
  }
  render();
}

function processSafMonth() {
  if (!state.saf.owned) return { revenue: 0, costs: 0, net: 0 };
  safMaybeStartNewSeason();
  safMaybeRevealYouth();
  safRandomEventMonth();

  const structureBoost = SAF_STRUCTURE_DEFS.reduce((sum, def) => sum + safeInt(state.saf.structures?.[def.id], 0) * def.revenueBoost, 0);
  const moodFactor = clamp(0.62 + state.saf.fanMood / 120, 0.35, 1.45);
  const repFactor = clamp(0.55 + state.saf.reputation / 120, 0.35, 1.6);
  const scale = Math.max(0.9, state.saf.purchasePrice / 220000000);
  const mediaPower = state.saf.roster.reduce((sum, p) => sum + (safeNumber(p.mediaScore, 0) / 120), 0);

  const ticketRevenue = 190000 * scale * moodFactor * (1 + safeInt(state.saf.structures.estadio, 0) * 0.14);
  const sponsorRevenue = 210000 * scale * repFactor * (1 + state.saf.sponsorsLevel * 0.1) * (1 + mediaPower * 0.02);
  const tvRevenue = 180000 * scale * (1 + state.saf.tvLevel * 0.11) * (1 + state.saf.networkClubs * 0.06);
  const youthRevenue = state.saf.youthPool.length * 15000 * (1 + safeInt(state.saf.structures.base, 0) * 0.06);
  const branchRevenue = state.saf.europeBranch ? 130000 * repFactor : 0;
  const totalRevenue = Math.floor(ticketRevenue + sponsorRevenue + tvRevenue + youthRevenue + branchRevenue);

  const wageCost = 340000 * scale * (1 + state.saf.roster.length * 0.065);
  const medicalCost = 98000 * scale * clamp(1 - safeInt(state.saf.structures.medico, 0) * 0.06, 0.65, 1.1);
  const scoutCost = 85000 * (1 + safeInt(state.saf.structures.scout, 0) * 0.24);
  const baseCost = 110000 * (1 + safeInt(state.saf.structures.base, 0) * 0.22);
  const stadiumMaint = 72000 * (1 + safeInt(state.saf.structures.estadio, 0) * 0.2);
  const debtService = safeNumber(state.saf.debt, 0) * 0.0115;
  const taxBurden = totalRevenue * 0.06;
  const totalCosts = Math.floor(wageCost + medicalCost + scoutCost + baseCost + stadiumMaint + debtService + taxBurden);

  const net = totalRevenue - totalCosts;
  state.money += net;
  if (state.money < 0) state.money = 0;
  state.monthRevenue += net;
  state.stats.companyRevenue += totalRevenue;
  state.stats.operationalCosts += totalCosts;
  state.saf.lastMonthly = { revenue: totalRevenue, costs: totalCosts, net };

  const debtReduction = Math.max(0, Math.floor((debtService * 0.2) + (net > 0 ? net * 0.015 : 0)));
  state.saf.debt = Math.max(0, state.saf.debt - debtReduction);

  state.saf.fanMood = clamp(state.saf.fanMood + (net >= 0 ? 0.6 : -2.8) - state.saf.pressure * 0.012, 0, 100);
  state.saf.reputation = clamp(state.saf.reputation + (net >= 0 ? 0.35 : -1.9), 0, 100);
  state.saf.pressure = clamp(state.saf.pressure + (net >= 0 ? -0.45 : 2.4), 0, 100);

  const growth = (net / Math.max(1, state.saf.valuation)) + structureBoost * 0.17 + (state.saf.reputation - 50) * 0.00045 - (state.saf.debt / Math.max(1, state.saf.valuation)) * 0.09;
  state.saf.valuation = Math.max(Math.floor(state.saf.purchasePrice * 0.42), Math.floor(state.saf.valuation * (1 + clamp(growth, -0.12, 0.09))));
  return state.saf.lastMonthly;
}

function renderSafCalendar() {
  if (!el.safCalendarList || !state.saf?.owned) return;
  const comp = state.saf.competitions;
  const liga = comp.league;
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const roundsPerMonth = Math.max(1, Math.ceil(liga.roundsTotal / 10));
  const schedule = months.map((name, idx) => {
    const m = idx + 1;
    let focus = "Treino e mercado";
    let tone = "base";
    if (m >= 2 && m <= 11 && !liga.finished) {
      const startRound = Math.min(liga.roundsTotal, Math.max(1, (m - 2) * roundsPerMonth + 1));
      const endRound = Math.min(liga.roundsTotal, startRound + roundsPerMonth - 1);
      focus = `Liga (${startRound}-${endRound})`;
      tone = "league";
    }
    if (state.saf.region === "Brasil" && m >= 3 && m <= 11 && comp.copa.alive && !comp.copa.finished) {
      focus += " | Copa BR";
      tone = "cup";
    }
    if (comp.libertadores.qualified && m >= 4 && m <= 11 && comp.libertadores.alive && !comp.libertadores.finished) {
      focus += state.saf.region === "Europa" ? " | Champions" : " | Libertadores";
      tone = "continental";
    }
    return { m, name, focus, tone };
  });

  const targetPos = state.saf.region === "Brasil" ? (String(liga.tier || "A") === "A" ? "Top 6" : "Top 4") : "Top 4";
  const cupGoal = state.saf.region === "Brasil" ? "Chegar na semifinal da Copa do Brasil" : "Sem copa nacional no modo atual";
  const continental = state.saf.region === "Europa" ? "Champions" : "Libertadores";
  const contGoal = comp.libertadores.qualified ? `Chegar na semifinal da ${continental}` : `Classificar para ${continental} na proxima temporada`;
  const financialGoal = state.saf.debt > 0 ? `Reduzir divida SAF para abaixo de ${formatMoney(state.saf.purchasePrice * 0.25)}` : "Manter caixa positivo por toda a temporada";
  const grid = schedule.map((s) => `
    <div class="saf-cal-card ${s.tone} ${s.m === state.month ? "current" : ""}">
      <div class="saf-cal-month">${s.name}</div>
      <div class="saf-cal-focus">${s.focus}</div>
    </div>
  `).join("");

  el.safCalendarList.innerHTML = `
    <div class="card">
      <div class="title">Temporada ${comp.seasonYear} - Roteiro mensal</div>
      <div class="saf-cal-grid">${grid}</div>
    </div>
    <div class="card">
      <div class="title">Metas da temporada</div>
      <div class="meta">Liga: terminar no ${targetPos} (atual ${liga.position}o)</div>
      <div class="meta">${cupGoal}</div>
      <div class="meta">${contGoal}</div>
      <div class="meta">${financialGoal}</div>
    </div>
  `;
}

function renderSaf() {
  if (!el.safStatus || !el.safClubChoices || !el.safMonthLine || !el.safValuationLine) return;
  const saf = state.saf;

  if (!saf.owned) {
    el.safStatus.textContent = "Sem clube no momento.";
    el.safMonthLine.textContent = "Receitas R$ 0,00 | Custos R$ 0,00 | Liquido R$ 0,00";
    el.safValuationLine.textContent = formatMoney(0);
    const filtered = SAF_CLUB_PROFILES.filter((p) => safProfileMatchesFilter(p, safClubFilter));
    const filterBar = `
      <div class="card">
        <div class="title">Filtrar clubes</div>
        <div class="btn-row">
          <button class="btn ${safClubFilter === "all" ? "alt" : ""}" data-filter="all">Todos</button>
          <button class="btn ${safClubFilter === "a" ? "alt" : ""}" data-filter="a">Serie A</button>
        </div>
        <div class="btn-row">
          <button class="btn ${safClubFilter === "b" ? "alt" : ""}" data-filter="b">Serie B</button>
          <button class="btn ${safClubFilter === "c" ? "alt" : ""}" data-filter="c">Serie C</button>
        </div>
        <button class="btn ${safClubFilter === "eu" ? "alt" : ""}" data-filter="eu">Europa</button>
      </div>
    `;
    el.safClubChoices.innerHTML = filterBar;
    el.safClubChoices.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        safClubFilter = String(btn.getAttribute("data-filter") || "all");
        render();
      });
    });
    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${escapeHtml(p.nome)}</div>
        <div class="meta">${escapeHtml(p.league)} | Compra ${formatMoney(p.buyPrice)} | Divida ${formatMoney(p.debt)}</div>
        <div class="meta">Pressao inicial: ${p.pressure}% | Potencial: x${p.potential.toFixed(2)}</div>
        <button class="btn" ${state.money < p.buyPrice ? "disabled" : ""}>Comprar SAF</button>
      `;
      card.querySelector("button").addEventListener("click", () => buySafClub(p.id));
      el.safClubChoices.appendChild(card);
    });
    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "mini warn";
      empty.textContent = "Nenhum clube encontrado nesse filtro.";
      el.safClubChoices.appendChild(empty);
    }
    if (el.safStructureList) el.safStructureList.innerHTML = `<div class="mini">Compre uma SAF para desbloquear gestao de estrutura.</div>`;
    if (el.safMarketList) el.safMarketList.innerHTML = `<div class="mini">Compre uma SAF para acessar mercado de atletas.</div>`;
    if (el.safFinanceList) el.safFinanceList.innerHTML = `<div class="mini">Compre uma SAF para acessar financas do clube.</div>`;
    if (el.safExpansionList) el.safExpansionList.innerHTML = `<div class="mini">Compre uma SAF para iniciar expansao internacional.</div>`;
    if (el.safCompetitionsList) el.safCompetitionsList.innerHTML = `<div class="mini">Compre uma SAF para disputar campeonatos.</div>`;
    if (el.safCalendarList) el.safCalendarList.innerHTML = `<div class="mini">Compre uma SAF para desbloquear calendario da temporada.</div>`;
    if (el.safTrophiesList) el.safTrophiesList.innerHTML = `<div class="mini">Sem titulos ainda.</div>`;
    if (el.safEventList) el.safEventList.innerHTML = `<div class="mini">Eventos do futebol aparecerao apos a compra da SAF.</div>`;
    if (el.safGoalLine) el.safGoalLine.textContent = "Objetivo: 3 clubes, Libertadores, Champions e base de elite.";
    return;
  }

  const netWorth = safNetWorth();
  el.safStatus.textContent = `${saf.clubName} | ${saf.league} | Reputacao ${Math.round(saf.reputation)} | Torcida ${Math.round(saf.fanMood)}%`;
  el.safMonthLine.textContent = `Receitas ${formatMoney(saf.lastMonthly.revenue)} | Custos ${formatMoney(saf.lastMonthly.costs)} | Liquido ${formatMoney(saf.lastMonthly.net)}`;
  el.safValuationLine.textContent = `${formatMoney(saf.valuation)} | Divida ${formatMoney(saf.debt)} | Participacao vendida ${saf.safSoldPct.toFixed(1)}%`;

  el.safClubChoices.innerHTML = `<div class="mini">SAF ativa: ${escapeHtml(saf.clubName)} (patrimonio SAF: ${formatMoney(netWorth)}).</div>`;

  if (el.safStructureList) {
    el.safStructureList.innerHTML = "";
    SAF_STRUCTURE_DEFS.forEach((def) => {
      const lvl = safeInt(saf.structures?.[def.id], 0);
      const cost = safStructureCost(def.id);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${def.nome} (Nv. ${lvl})</div>
        <div class="meta">Custo: ${formatMoney(cost)} | Bonus de receita por nivel: +${(def.revenueBoost * 100).toFixed(1)}%</div>
        <button class="btn" ${state.money < cost ? "disabled" : ""}>Investir</button>
      `;
      card.querySelector("button").addEventListener("click", () => buySafStructure(def.id));
      el.safStructureList.appendChild(card);
    });
  }

  if (el.safMarketList) {
    const youthCards = saf.youthPool.map((p) => {
      const cost = Math.floor(5000000 + p.potential * 120000);
      return `
        <div class="card">
          <div class="title">Base: ${p.age} anos | potencial ${p.potential}</div>
          <div class="meta">Investir ${formatMoney(cost)} para promover ao elenco</div>
          <button class="btn" data-act="youth" data-id="${p.id}" ${state.money < cost ? "disabled" : ""}>Desenvolver e promover</button>
        </div>
      `;
    }).join("");
    el.safMarketList.innerHTML = `
      <div class="card">
        <div class="title">Mercado de atletas</div>
        <div class="meta">Elenco: ${saf.roster.length} atleta(s)</div>
        <div class="btn-row">
          <button class="btn" data-act="prospect">Comprar promessa</button>
          <button class="btn alt" data-act="media">Contratar midiatico</button>
        </div>
        <button class="btn alt" data-act="sell">Aceitar melhor proposta</button>
      </div>
      ${youthCards || `<div class="mini">Nenhum jovem disponivel na base neste momento.</div>`}
    `;
    el.safMarketList.querySelector('[data-act="prospect"]')?.addEventListener("click", safBuyProspect);
    el.safMarketList.querySelector('[data-act="media"]')?.addEventListener("click", safBuyMediaPlayer);
    el.safMarketList.querySelector('[data-act="sell"]')?.addEventListener("click", safSellBestOffer);
    el.safMarketList.querySelectorAll('[data-act="youth"]').forEach((btn) => {
      btn.addEventListener("click", () => safInvestInYouth(String(btn.dataset.id || "")));
    });
  }

  if (el.safFinanceList) {
    const share10 = Math.floor(saf.valuation * 0.1 * 0.98);
    const share40 = Math.floor(saf.valuation * 0.4 * 0.98);
    el.safFinanceList.innerHTML = `
      <div class="card">
        <div class="title">Receitas e dividas do clube</div>
        <div class="meta">Bilheteria/patrocinio/TV entram mensalmente no caixa principal.</div>
        <div class="meta">Divida SAF atual: ${formatMoney(saf.debt)}</div>
        <div class="btn-row">
          <button class="btn" data-act="loan">Pegar emprestimo SAF</button>
          <button class="btn alt" data-act="sell10">Vender 10% (${formatMoney(share10)})</button>
        </div>
        <div class="btn-row">
          <button class="btn alt" data-act="sell40">Vender 40% (${formatMoney(share40)})</button>
          <button class="btn" data-act="ipo" ${saf.investors.ipo ? "disabled" : ""}>Abrir capital (IPO)</button>
        </div>
        <div class="btn-row">
          <button class="btn" data-act="arab" ${saf.investors.arab ? "disabled" : ""}>Atrair investidor arabe</button>
          <button class="btn alt" data-act="us" ${saf.investors.us ? "disabled" : ""}>Atrair investidor americano</button>
        </div>
      </div>
    `;
    el.safFinanceList.querySelector('[data-act="loan"]')?.addEventListener("click", safTakeLoan);
    el.safFinanceList.querySelector('[data-act="sell10"]')?.addEventListener("click", () => safSellShare(10));
    el.safFinanceList.querySelector('[data-act="sell40"]')?.addEventListener("click", () => safSellShare(40));
    el.safFinanceList.querySelector('[data-act="ipo"]')?.addEventListener("click", safOpenIpo);
    el.safFinanceList.querySelector('[data-act="arab"]')?.addEventListener("click", () => safAttractInvestor("arab"));
    el.safFinanceList.querySelector('[data-act="us"]')?.addEventListener("click", () => safAttractInvestor("us"));
  }

  if (el.safExpansionList) {
    const branchCost = Math.floor(Math.max(220000000, saf.valuation * 0.2));
    const satCost = Math.floor(140000000 + saf.networkClubs * 120000000);
    el.safExpansionList.innerHTML = `
      <div class="card">
        <div class="title">Rede internacional de clubes</div>
        <div class="meta">Filial Europa: ${saf.europeBranch ? "Ativa" : "Inativa"} | Clubes no grupo: ${1 + saf.networkClubs}</div>
        <div class="btn-row">
          <button class="btn" data-act="branch" ${saf.europeBranch || state.money < branchCost ? "disabled" : ""}>Criar filial na Europa (${formatMoney(branchCost)})</button>
          <button class="btn alt" data-act="sat" ${saf.networkClubs >= 2 || state.money < satCost ? "disabled" : ""}>Comprar clube satelite (${formatMoney(satCost)})</button>
        </div>
      </div>
    `;
    el.safExpansionList.querySelector('[data-act="branch"]')?.addEventListener("click", safCreateEuropeBranch);
    el.safExpansionList.querySelector('[data-act="sat"]')?.addEventListener("click", safBuySatelliteClub);
  }

  if (el.safCompetitionsList) {
    const canAct = safCompetitionActionAvailable();
    const comp = saf.competitions;
    const liga = comp.league;
    const continentalLabel = saf.region === "Europa" ? "Champions" : "Libertadores";
    const libOn = comp.libertadores.qualified && comp.libertadores.alive && !comp.libertadores.finished;
    const copaOn = saf.region === "Brasil" && comp.copa.alive && !comp.copa.finished;
    const ligaOn = !liga.finished;
    const nextCopa = comp.copa.phases[Math.min(comp.copa.phase, comp.copa.phases.length - 1)] || "Encerrada";
    const nextLib = comp.libertadores.phases[Math.min(comp.libertadores.phase, comp.libertadores.phases.length - 1)] || "Encerrada";
    el.safCompetitionsList.innerHTML = `
      <div class="card">
        <div class="title">Tabela: ${escapeHtml(liga.name)}</div>
        <div class="meta">Rodadas: ${liga.roundsPlayed}/${liga.roundsTotal} | Pontos: ${liga.points} | Posicao: ${liga.position}o</div>
        <div class="meta">Zona: ${saf.region === "Brasil" ? (String(liga.tier || "A") === "A" ? "G6 classifica Libertadores | Z4 rebaixa" : String(liga.tier || "A") === "B" ? "G4 sobe Serie A | Z4 cai Serie C" : "G4 sobe Serie B") : "Liga europeia sem rebaixamento no modo atual"}</div>
        <div class="meta">V: ${liga.wins} | E: ${liga.draws} | D: ${liga.losses} | GP: ${liga.goalsFor} | GC: ${liga.goalsAgainst}</div>
        <button class="btn" data-act="league" ${!canAct || !ligaOn ? "disabled" : ""}>Jogar rodada (pontos corridos)</button>
      </div>
      <div class="card">
        <div class="title">Copa do Brasil</div>
        <div class="meta">${copaOn ? `Proxima fase: ${nextCopa}` : comp.copa.finished ? "Encerrada na temporada" : "Nao disponivel"}</div>
        <button class="btn" data-act="copa" ${!canAct || !copaOn ? "disabled" : ""}>Disputar fase da Copa do Brasil</button>
      </div>
      <div class="card">
        <div class="title">${continentalLabel}</div>
        <div class="meta">${comp.libertadores.qualified ? (libOn ? `Proxima fase: ${nextLib}` : "Encerrada na temporada") : "Sem classificacao nesta temporada"}</div>
        <button class="btn" data-act="liberta" ${!canAct || !libOn ? "disabled" : ""}>Disputar fase da ${continentalLabel}</button>
      </div>
      <div class="mini">${canAct ? "Voce pode disputar 1 partida/fase neste mes." : "Acao de competicao deste mes ja utilizada."}</div>
    `;
    el.safCompetitionsList.querySelector('[data-act="league"]')?.addEventListener("click", safPlayLeagueRound);
    el.safCompetitionsList.querySelector('[data-act="copa"]')?.addEventListener("click", () => safPlayCupMatch("copa"));
    el.safCompetitionsList.querySelector('[data-act="liberta"]')?.addEventListener("click", () => safPlayCupMatch("libertadores"));
  }

  renderSafCalendar();

  if (el.safTrophiesList) {
    const trophies = saf.trophies || { brasileirao: 0, copaDoBrasil: 0, libertadores: 0, champions: 0 };
    const history = Array.isArray(saf.trophyHistory) ? saf.trophyHistory : [];
    const rows = history.length
      ? history.map((h) => `<div class="row"><span>${escapeHtml(h.name)}</span><strong>Ano ${Math.max(1, safeInt(h.year, 1))}</strong></div>`).join("")
      : `<div class="mini">Nenhum titulo conquistado ainda.</div>`;
    el.safTrophiesList.innerHTML = `
      <div class="card">
        <div class="title">Sala de trofeus</div>
        <div class="meta">Brasileirao: ${trophies.brasileirao} | Copa do Brasil: ${trophies.copaDoBrasil}</div>
        <div class="meta">Libertadores: ${trophies.libertadores} | Champions: ${trophies.champions}</div>
      </div>
      <div class="card">
        <div class="title">Historico recente</div>
        ${rows}
      </div>
    `;
  }

  if (el.safEventList) {
    el.safEventList.innerHTML = saf.eventFeed.length ? saf.eventFeed.join("") : `<div class="mini">Sem eventos recentes.</div>`;
  }
  if (el.safGoalLine) {
    el.safGoalLine.textContent = `Objetivo: ${1 + saf.networkClubs}/3 clubes | Libertadores ${safeInt(saf.trophies?.libertadores, 0)} | Champions ${safeInt(saf.trophies?.champions, 0)} | Base Nv.${safeInt(saf.structures.base, 0)}`;
  }
}

function getPatrimonio() {
  const aircraftBrl = state.aviation.fleet.reduce((sum, a) => sum + a.currentValueUsd * state.forex.usd.rate, 0);
  const aviationDebtBrl = state.aviation.debtUsd * state.forex.usd.rate;
  const savingsBalance = Math.max(0, safeNumber(state.savings?.balance, 0));
  const cryptoBrl = cryptoTotalUsdValue() * state.forex.usd.rate;
  const realEstateIncome = realEstateMonthlyIncome();
  const realEstateValue = realEstatePortfolioValue();
  const franchiseBank = Math.max(0, safeNumber(state.franchise?.bankBalance, 0));
  const franchiseValuation = Math.max(0, safeNumber(state.franchise?.active?.valuation, 0));
  return state.money + savingsBalance + cryptoBrl + franchiseBank + franchiseValuation + (effectiveCompanyIncome() + farmMonthlyIncome() + realEstateIncome) * 6 + realEstateValue + totalParticipationValue() + garageTotalValue() + aircraftBrl + forexValueBrl("USD") + forexValueBrl("EUR") + safNetWorth() - state.tax.debt - aviationDebtBrl;
}

function xpToNext(level) {
  return 100 + (level - 1) * 35;
}

function addXp(amount) {
  if (amount <= 0) return;
  state.xp += Math.floor(amount);
  while (state.xp >= xpToNext(state.level)) {
    state.xp -= xpToNext(state.level);
    state.level += 1;
    logEvent(`Nivel aumentado para ${state.level}.`, "ok");
    sfxAchievement();
  }
}

function calcUpgradeCost(u) {
  return Math.floor(u.baseCost * Math.pow(1.7, u.level) * clickUpgradeCostMultiplier());
}

function clickUpgradeCostMultiplier() {
  const click = effectiveClickValue();
  if (click >= 20000) return 2.5;
  if (click >= 5000) return 1.8;
  if (click >= 1000) return 1.35;
  return 1;
}

function calcCompanyCost(c) {
  return Math.floor(c.baseCost * Math.pow(1.52, c.owned) * (1 + c.level * 0.08));
}

function calcCompanyUpgradeCost(c) {
  return Math.floor(c.baseCost * 1.35 * Math.pow(1.72, c.level) * (1 + c.owned * 0.18));
}

function logEvent(text, type = "") {
  const stamp = `Ano ${state.year}, Mes ${state.month}`;
  const cls = type ? `class="${type}"` : "";
  const safeText = escapeHtml(text);
  state.logs.unshift(`<div ${cls}>[${stamp}] ${safeText}</div>`);
  state.logs = state.logs.slice(0, 50);
  el.eventLog.innerHTML = state.logs.join("");
}

function setStatus(msg, type = "") {
  el.statusMsg.className = `mini ${type}`.trim();
  el.statusMsg.textContent = msg;
}

function renderAdminPanel() {
  if (!el.adminLoginBox || !el.adminActionsBox) return;
  const locked = !adminSession.loggedIn;
  el.adminLoginBox.style.display = locked ? "grid" : "none";
  el.adminActionsBox.style.display = locked ? "none" : "grid";
  if (el.adminSessionText) el.adminSessionText.textContent = locked ? "Bloqueado" : "Autenticado";
  if (el.adminLoginMsg) {
    el.adminLoginMsg.className = `mini ${locked ? "warn" : "ok"}`.trim();
    el.adminLoginMsg.textContent = locked ? "Nao autenticado." : "Acesso admin liberado.";
  }
}

function adminNeedAuth() {
  if (adminSession.loggedIn) return true;
  setStatus("Painel admin bloqueado. Faca login para usar.", "warn");
  renderAdminPanel();
  return false;
}

function readAdminInt(inputEl, min = 1, max = Number.MAX_SAFE_INTEGER) {
  const raw = inputEl?.value ?? "";
  const value = Math.floor(safeNumber(raw, NaN));
  if (!Number.isFinite(value) || value < min || value > max) return null;
  return value;
}

function adminLogin() {
  const access = String(el.adminAccessInput?.value || "").trim();
  const pass = String(el.adminPasswordInput?.value || "");
  if (access === ADMIN_ACCESS && pass === ADMIN_PASSWORD) {
    adminSession.loggedIn = true;
    if (el.adminPasswordInput) el.adminPasswordInput.value = "";
    if (el.adminAccessInput) el.adminAccessInput.value = "";
    logEvent("Painel admin autenticado.", "warn");
    setStatus("Login admin realizado.", "ok");
    render();
    return;
  }
  adminSession.loggedIn = false;
  if (el.adminPasswordInput) el.adminPasswordInput.value = "";
  if (el.adminLoginMsg) {
    el.adminLoginMsg.className = "mini bad";
    el.adminLoginMsg.textContent = "Acesso ou senha invalidos.";
  }
  setStatus("Falha no login admin.", "bad");
}

function adminLogout() {
  adminSession.loggedIn = false;
  if (el.adminPasswordInput) el.adminPasswordInput.value = "";
  if (el.adminAccessInput) el.adminAccessInput.value = "";
  logEvent("Sessao admin encerrada.", "warn");
  setStatus("Logout admin concluido.", "ok");
  render();
}

function adminAddMoney() {
  if (!adminNeedAuth()) return;
  const amount = readAdminInt(el.adminMoneyInput, 1);
  if (!amount) {
    setStatus("Informe um valor valido para adicionar.", "bad");
    return;
  }
  state.money += amount;
  state.monthRevenue += amount;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  logEvent(`Admin adicionou ${formatMoney(amount)} ao saldo.`, "warn");
  setStatus(`+${formatMoney(amount)} aplicado via admin.`, "ok");
  render();
}

function adminRemoveMoney() {
  if (!adminNeedAuth()) return;
  const amount = readAdminInt(el.adminMoneyInput, 1);
  if (!amount) {
    setStatus("Informe um valor valido para remover.", "bad");
    return;
  }
  const removed = Math.min(state.money, amount);
  state.money = Math.max(0, state.money - amount);
  logEvent(`Admin removeu ${formatMoney(removed)} do saldo.`, "warn");
  setStatus(`-${formatMoney(removed)} removido via admin.`, "warn");
  render();
}

function adminSetMoney() {
  if (!adminNeedAuth()) return;
  const amount = readAdminInt(el.adminSetMoneyInput, 0);
  if (amount === null) {
    setStatus("Informe um saldo valido.", "bad");
    return;
  }
  state.money = amount;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  logEvent(`Admin definiu saldo para ${formatMoney(amount)}.`, "warn");
  setStatus(`Saldo definido para ${formatMoney(amount)}.`, "ok");
  render();
}

function adminAddClickBase() {
  if (!adminNeedAuth()) return;
  const add = readAdminInt(el.adminClickInput, 1);
  if (!add) {
    setStatus("Informe um valor valido para clique.", "bad");
    return;
  }
  state.clickValue += add;
  logEvent(`Admin aumentou clique base em ${formatMoney(add)}.`, "warn");
  setStatus(`Clique base aumentado em ${formatMoney(add)}.`, "ok");
  render();
}

function adminAddPrestige() {
  if (!adminNeedAuth()) return;
  const add = readAdminInt(el.adminPrestigeInput, 1);
  if (!add) {
    setStatus("Informe pontos de prestigio validos.", "bad");
    return;
  }
  state.prestigePoints += add;
  logEvent(`Admin adicionou ${add} ponto(s) de prestigio.`, "warn");
  setStatus(`Prestigio +${add}.`, "ok");
  render();
}

function adminAdvanceMonths() {
  if (!adminNeedAuth()) return;
  const months = readAdminInt(el.adminMonthInput, 1, ADMIN_MAX_ADVANCE_MONTHS);
  if (!months) {
    setStatus(`Informe de 1 a ${ADMIN_MAX_ADVANCE_MONTHS} meses.`, "bad");
    return;
  }
  for (let i = 0; i < months; i += 1) {
    if (hasPendingTaxDecision()) closeYear(true);
    processMonth();
    if (hasPendingTaxDecision()) closeYear(true);
  }
  logEvent(`Admin avancou ${months} mes(es).`, "warn");
  setStatus(`Tempo avancado em ${months} mes(es).`, "ok");
  render();
}

function adminBoostEconomy() {
  if (!adminNeedAuth()) return;
  state.economy.inflation = 0.015;
  state.economy.interest = 0.03;
  state.economy.confidence = 1.35;
  state.economy.sectorBoosts = {
    Varejo: 1.18,
    Alimentos: 1.18,
    Servicos: 1.18,
    Digital: 1.18,
    Tecnologia: 1.18,
    Industria: 1.18,
    Turismo: 1.18,
    Financeiro: 1.18,
    Conglomerado: 1.18
  };
  logEvent("Admin aplicou boost economico global.", "warn");
  setStatus("Boost economico aplicado.", "ok");
  render();
}

function adminUnlockEverything() {
  if (!adminNeedAuth()) return;

  upgrades.forEach((u) => {
    const targetLevel = Math.max(10, u.level);
    const diff = targetLevel - u.level;
    if (diff > 0) state.clickValue += diff * u.add;
    u.level = targetLevel;
  });

  companies.forEach((c) => {
    c.owned = Math.max(c.owned, 8);
    c.level = Math.max(c.level, 6);
    c.salaryTier = Math.max(c.salaryTier, 1);
    c.employees = Math.max(c.employees, requiredEmployees(c));
    c.marketFactor = clamp(c.marketFactor, 0.65, 3.8);
  });

  state.research.automation = Math.max(state.research.automation, 10);
  state.research.hr = Math.max(state.research.hr, 10);
  state.research.branding = Math.max(state.research.branding, 10);
  state.level = Math.max(state.level, 35);
  state.reputation = 100;
  state.prestigePoints = Math.max(state.prestigePoints, 20);

  initParticipationMarket();
  participationCatalog.forEach((c) => {
    state.participations.holdings[c.id] = 100;
  });

  state.forex.usd.balance = Math.max(state.forex.usd.balance, 250000);
  state.forex.eur.balance = Math.max(state.forex.eur.balance, 150000);
  state.money = Math.max(state.money, 50000000);
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);

  logEvent("Admin executou desbloqueio total de progresso.", "warn");
  setStatus("Desbloqueio total aplicado.", "ok");
  render();
}

function adminClearDebts() {
  if (!adminNeedAuth()) return;
  state.loan = { principalRemaining: 0, installment: 0, monthsLeft: 0, annualRate: 0, label: "" };
  state.tax.debt = 0;
  state.tax.pendingYearClose = null;
  state.aviation.debtUsd = 0;
  state.aviation.accruedUsd = 0;
  logEvent("Admin quitou todas as dividas do jogador.", "warn");
  setStatus("Dividas quitadas via admin.", "ok");
  render();
}

function taxRateFor(avgMonthly) {
  const income = Math.max(0, safeNumber(avgMonthly, 0));
  if (income <= 10000) return 0.07;
  if (income <= 50000) return 0.12;
  if (income <= 150000) return 0.18;
  if (income <= 400000) return 0.24;
  if (income <= 900000) return 0.3;
  return 0.35;
}

function applyYearlyInflation() {
  const f = 1 + state.economy.inflation;
  upgrades.forEach((u) => {
    u.baseCost = Math.floor(u.baseCost * f);
  });
  companies.forEach((c) => {
    c.baseCost = Math.floor(c.baseCost * f);
    c.baseIncome = Math.floor(c.baseIncome * (1 + state.economy.inflation * 0.55));
  });
}

function evolveEconomyYearly() {
  state.economy.inflation = clamp(state.economy.inflation + (Math.random() * 0.03 - 0.015), 0.01, 0.14);
  state.economy.interest = clamp(state.economy.interest + (Math.random() * 0.04 - 0.02), 0.02, 0.22);
  state.economy.confidence = clamp(state.economy.confidence + (Math.random() * 0.12 - 0.06), 0.75, 1.35);
}

function maybeMarketEvent() {
  if (state.month % 3 !== 0) return;
  const sectorOptions = ["Varejo", "Alimentos", "Servicos", "Digital", "Tecnologia", "Industria", "Turismo", "Financeiro", "Conglomerado"];
  const sector = sectorOptions[Math.floor(Math.random() * sectorOptions.length)];
  const boost = Math.random() < 0.5 ? clamp(0.86 + Math.random() * 0.08, 0.84, 0.95) : clamp(1.05 + Math.random() * 0.14, 1.05, 1.2);
  state.economy.sectorBoosts[sector] = boost;
  const kind = boost >= 1 ? "aquecimento" : "recessao";
  logEvent(`Mercado: ${kind} no setor ${sector} (x${boost.toFixed(2)}).`, boost >= 1 ? "ok" : "warn");
}

function monthStamp() {
  return state.year * 12 + state.month;
}

function contractInvestmentCost(c) {
  return Math.floor(c.baseReward * 0.45);
}

function generateContractOffers() {
  const pool = [
    { id: "marketing", title: "Campanha nacional", months: 2, baseReward: 18000, repGain: 4, xp: 18 },
    { id: "supply", title: "Contrato de fornecimento", months: 3, baseReward: 36000, repGain: 6, xp: 30 },
    { id: "software", title: "Transformacao digital", months: 4, baseReward: 72000, repGain: 8, xp: 45 },
    { id: "expansao", title: "Expansao regional", months: 5, baseReward: 130000, repGain: 10, xp: 60 }
  ];
  const levelFactor = 1 + state.level * 0.04 + state.research.branding * 0.06 + state.reputation / 220;
  const picked = [...pool].sort(() => Math.random() - 0.5).slice(0, 3).map((p, i) => ({
    offerId: `${p.id}_${monthStamp()}_${i}`,
    title: p.title,
    months: p.months,
    baseReward: Math.floor(p.baseReward * levelFactor),
    repGain: p.repGain,
    xp: p.xp
  }));
  state.contracts.offers = picked;
  state.contracts.lastOfferMonthStamp = monthStamp();
}

function ensureContractOffers() {
  if (state.contracts.lastOfferMonthStamp === 0) {
    generateContractOffers();
    return;
  }
  if (monthStamp() - state.contracts.lastOfferMonthStamp >= 6) {
    generateContractOffers();
    logEvent("Novas ofertas de contratos chegaram ao mercado.", "ok");
  }
}

function startContract(offerId) {
  const offer = state.contracts.offers.find((x) => x.offerId === offerId);
  if (!offer) return;
  if (state.contracts.active.length >= 2) {
    setStatus("Limite de 2 contratos ativos atingido.", "warn");
    return;
  }
  const invest = contractInvestmentCost(offer);
  if (state.money < invest) {
    setStatus("Dinheiro insuficiente para iniciar esse contrato.", "bad");
    return;
  }
  state.money -= invest;
  state.contracts.active.push({
    id: offer.offerId,
    title: offer.title,
    monthsLeft: offer.months,
    reward: offer.baseReward,
    repGain: offer.repGain,
    xp: offer.xp
  });
  state.contracts.offers = state.contracts.offers.filter((x) => x.offerId !== offerId);
  logEvent(`Contrato iniciado: ${offer.title} (investimento ${formatMoney(invest)}).`);
  render();
}

function processContractsMonth() {
  if (!state.contracts.active.length) return 0;
  let totalPayout = 0;
  const done = [];
  state.contracts.active.forEach((c) => {
    c.monthsLeft -= 1;
    if (c.monthsLeft <= 0) done.push(c);
  });
  state.contracts.active = state.contracts.active.filter((c) => c.monthsLeft > 0);
  done.forEach((c) => {
    const payout = Math.floor(c.reward * (1 + state.research.branding * 0.05));
    state.money += payout;
    totalPayout += payout;
    state.stats.contractRevenue += payout;
    state.reputation = clamp(state.reputation + c.repGain, 0, 100);
    addXp(c.xp);
    logEvent(`Contrato finalizado: ${c.title}. Recebido ${formatMoney(payout)}.`, "ok");
  });
  return totalPayout;
}

function renderContracts() {
  ensureContractOffers();
  el.contractList.innerHTML = "";

  state.contracts.active.forEach((c) => {
    const title = escapeHtml(c.title);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">Ativo: ${title}</div>
      <div class="meta">Prazo restante: ${c.monthsLeft} mes(es)</div>
      <div class="meta">Pagamento previsto: ${formatMoney(c.reward)}</div>
    `;
    el.contractList.appendChild(card);
  });

  state.contracts.offers.forEach((c) => {
    const invest = contractInvestmentCost(c);
    const title = escapeHtml(c.title);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${title}</div>
      <div class="meta">Duracao: ${c.months} mes(es) | Reputacao: +${c.repGain}</div>
      <div class="meta">Investimento: ${formatMoney(invest)} | Retorno: ${formatMoney(c.baseReward)}</div>
      <button class="btn" ${state.money < invest ? "disabled" : ""}>Assinar contrato</button>
    `;
    card.querySelector("button").addEventListener("click", () => startContract(c.offerId));
    el.contractList.appendChild(card);
  });
}

function checkAchievements() {
  achievements.forEach((a) => {
    if (state.achievementsUnlocked.includes(a.id)) return;
    if (!a.check()) return;
    state.achievementsUnlocked.push(a.id);
    state.money += 500;
    state.stats.achievementRevenue += 500;
    logEvent(`Conquista desbloqueada: ${a.title} (+${formatMoney(500)}).`, "ok");
    sfxAchievement();
  });
}

function renderAchievements() {
  el.achievementList.innerHTML = "";
  achievements.forEach((a) => {
    const done = state.achievementsUnlocked.includes(a.id);
    const card = document.createElement("div");
    card.className = `ach-item ${done ? "done" : ""}`.trim();
    card.innerHTML = `
      <div class="title">${done ? "Desbloqueada" : "Bloqueada"} - ${a.title}</div>
      <div class="meta">${a.desc}</div>
      <div class="mini">${a.progress()}</div>
    `;
    el.achievementList.appendChild(card);
  });
}

function generateDailyMissions() {
  const clicksTarget = 50 + Math.floor(Math.random() * 100);
  const clickRevTarget = 2000 + Math.floor(Math.random() * 6000);
  const companyRevTarget = 1000 + Math.floor(Math.random() * 4000);

  state.dailyMissions = {
    dateKey: currentDateKey(),
    list: [
      {
        id: "d_clicks",
        title: "Cliqueiro do dia",
        desc: `Faca ${clicksTarget} cliques hoje`,
        metric: "totalClicks",
        start: state.stats.totalClicks,
        target: clicksTarget,
        rewardMoney: 1200,
        rewardXp: 40,
        claimed: false
      },
      {
        id: "d_click_rev",
        title: "Receita ativa",
        desc: `Faca ${clicksTarget} cliques hoje`,
        metric: "clickRevenue",
        start: state.stats.clickRevenue,
        target: clickRevTarget,
        rewardMoney: 2600,
        rewardXp: 80,
        claimed: false
      },
      {
        id: "d_company_rev",
        title: "Renda passiva",
        desc: `Ganhe ${formatMoney(companyRevTarget)} de empresas hoje`,
        metric: "companyRevenue",
        start: state.stats.companyRevenue,
        target: companyRevTarget,
        rewardMoney: 2000,
        rewardXp: 70,
        claimed: false
      }
    ]
  };
}

function ensureDailyMissionsFresh() {
  if (state.dailyMissions.dateKey !== currentDateKey() || !Array.isArray(state.dailyMissions.list) || !state.dailyMissions.list.length) {
    generateDailyMissions();
    logEvent("Missoes diarias renovadas.", "ok");
  }
}

function missionProgress(mission) {
  const current = Number(state.stats[mission.metric] || 0);
  return Math.max(0, Math.floor(current - Number(mission.start || 0)));
}

function claimDailyMission(id) {
  const mission = state.dailyMissions.list.find((m) => m.id === id);
  if (!mission || mission.claimed) return;
  if (missionProgress(mission) < mission.target) return;
  mission.claimed = true;
  state.money += mission.rewardMoney;
  state.stats.dailyRevenue += mission.rewardMoney;
  addXp(mission.rewardXp);
  logEvent(`Missao diaria concluida: ${mission.title} (+${formatMoney(mission.rewardMoney)} e +${mission.rewardXp} XP).`, "ok");
  sfxAchievement();
  render();
}

function renderDailyMissions() {
  ensureDailyMissionsFresh();
  el.dailyMissionList.innerHTML = "";
  el.dailyInfo.textContent = `Missoes de ${state.dailyMissions.dateKey}.`;

  state.dailyMissions.list.forEach((m) => {
    const progress = missionProgress(m);
    const done = progress >= m.target;
    const title = escapeHtml(m.title);
    const desc = escapeHtml(m.desc);
    const card = document.createElement("div");
    card.className = `ach-item ${done && !m.claimed ? "claimable" : ""}`.trim();
    card.innerHTML = `
      <div class="title">${title}</div>
      <div class="meta">${desc}</div>
      <div class="pill">${Math.min(progress, m.target)} / ${m.target}</div>
      <div class="mini">Recompensa: ${formatMoney(m.rewardMoney)} + ${m.rewardXp} XP</div>
      <button class="btn" ${done && !m.claimed ? "" : "disabled"}>${m.claimed ? "Resgatada" : "Resgatar"}</button>
    `;
    card.querySelector("button").addEventListener("click", () => claimDailyMission(m.id));
    el.dailyMissionList.appendChild(card);
  });
}

function researchCost(type) {
  const level = Number(state.research[type] || 0);
  const base = type === "automation" ? 18000 : type === "hr" ? 16000 : 22000;
  return Math.floor(base * Math.pow(1.8, level));
}

function investResearch(type) {
  const cost = researchCost(type);
  if (state.money < cost) {
    setStatus("Dinheiro insuficiente para investimento em P&D.", "bad");
    return;
  }
  state.money -= cost;
  state.research[type] += 1;
  state.stats.researchSpent += cost;
  if (type === "branding") state.reputation = clamp(state.reputation + 2, 0, 100);
  addXp(20);
  logEvent(`P&D realizado em ${type}. Nivel atual: ${state.research[type]}.`);
  sfxBuy();
  render();
}

function loadRanking() {
  try {
    const raw = localStorage.getItem(RANKING_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRanking(list) {
  localStorage.setItem(RANKING_KEY, JSON.stringify(list.slice(0, 100)));
}

function upsertRankingEntry() {
  const phone = (state.player.telefone || "").replace(/\D/g, "");
  if (!phone) return false;
  const name = (state.player.nome || "Jogador").trim();
  const entry = {
    phone,
    name,
    patrimonio: getPatrimonio(),
    money: state.money,
    level: state.level,
    prestige: state.prestigePoints,
    year: state.year,
    month: state.month,
    updatedAt: new Date().toISOString()
  };

  const list = loadRanking();
  const idx = list.findIndex((x) => String(x.phone) === phone);
  if (idx >= 0) list[idx] = entry;
  else list.push(entry);
  list.sort((a, b) => Number(b.patrimonio || 0) - Number(a.patrimonio || 0));
  saveRanking(list);
  return true;
}

function renderRanking() {
  const list = loadRanking();
  el.rankingList.innerHTML = "";
  if (!list.length) {
    el.rankingList.innerHTML = `<div class="mini">Ranking vazio. Salve um jogo vinculado ao telefone.</div>`;
    return;
  }

  list
    .sort((a, b) => Number(b.patrimonio || 0) - Number(a.patrimonio || 0))
    .slice(0, 20)
    .forEach((r, i) => {
      const name = escapeHtml(r.name || "Jogador");
      const phone = escapeHtml(r.phone || "-");
      const row = document.createElement("div");
      row.className = "rank-item";
      row.innerHTML = `
        <div class="rank-head"><span>#${i + 1} ${name}</span><span>${formatMoney(Number(r.patrimonio || 0))}</span></div>
        <div class="rank-meta">Tel: ${phone} | Nivel ${Number(r.level || 1)} | Prestigio ${Number(r.prestige || 0)}</div>
        <div class="rank-meta">Tempo: Ano ${Number(r.year || 1)}, Mes ${Number(r.month || 1)}</div>
      `;
      el.rankingList.appendChild(row);
    });
}

function renderWorldRanking() {
  const usdRate = state.forex.usd.rate;
  ensureWorldWealthInitialized();
  const roster = worldBillionaires.map((p) => ({
    id: p.id,
    name: p.nome,
    wealthBrl: safeNumber(state.worldWealth[p.id], p.usdBillion) * 1000000000 * usdRate,
    isPlayer: false
  }));
  const playerName = (state.player.nome || "Voce").trim();
  roster.push({
    id: "player",
    name: playerName,
    wealthBrl: getPatrimonio(),
    isPlayer: true
  });

  roster.sort((a, b) => b.wealthBrl - a.wealthBrl);
  const playerRank = roster.findIndex((x) => x.isPlayer) + 1;
  const top5 = roster.slice(0, 5);

  el.worldRankingInfo.textContent = `Base Forbes 2025 | Conversao atual: USD ${formatMoney(usdRate)}. Sua posicao: #${playerRank}`;
  el.worldRankingList.innerHTML = "";
  top5.forEach((r, i) => {
    const row = document.createElement("div");
    row.className = "rank-item";
    const label = r.isPlayer ? `${escapeHtml(r.name)} (voce)` : escapeHtml(r.name);
    row.innerHTML = `
      <div class="rank-head"><span>#${i + 1} ${label}</span><span class="rank-value">${formatWealthBrl(r.wealthBrl)}</span></div>
      <div class="rank-meta">${r.isPlayer ? "Patrimonio atual no jogo" : "Fortuna de referencia convertida para BRL"}</div>
    `;
    el.worldRankingList.appendChild(row);
  });
}

function buildAnnualCloseSummary() {
  const baseTotal = state.yearlyRevenues.reduce((a, b) => a + b, 0);
  const clickTotal = Math.max(0, safeNumber(state.yearlyClickRevenue, 0));
  const total = baseTotal + clickTotal;
  const avg = Math.max(0, total / 12);
  const rate = taxRateFor(avg);
  const yearlyTax = Math.floor(avg * rate);
  const yearlyIpva = Math.floor(garageAnnualIpva());
  const previousDebt = Math.max(0, safeNumber(state.tax.debt, 0));
  const debtInterest = Math.floor(previousDebt * state.economy.interest);
  const debtDue = previousDebt + debtInterest;
  return {
    closeYear: state.year,
    totalYearRevenue: total,
    clickYearRevenue: clickTotal,
    avg,
    rate,
    yearlyTax,
    yearlyIpva,
    previousDebt,
    debtInterest,
    debtDue,
    totalDue: yearlyTax + yearlyIpva + debtDue
  };
}

function hasPendingTaxDecision() {
  return Boolean(state.tax.pendingYearClose && typeof state.tax.pendingYearClose === "object");
}

function updateTaxOverlay() {
  if (!el.taxOverlay || !el.taxDueText) return;
  if (!hasPendingTaxDecision()) {
    el.taxOverlay.classList.remove("show");
    if (el.taxDetails) el.taxDetails.textContent = "";
    return;
  }
  const summary = state.tax.pendingYearClose;
  const due = Math.max(0, safeNumber(summary.totalDue, 0));
  const totalYear = Math.max(0, safeNumber(summary.totalYearRevenue, 0));
  const clickYear = Math.max(0, safeNumber(summary.clickYearRevenue, 0));
  const avg = Math.max(0, safeNumber(summary.avg, 0));
  const rate = clamp(safeNumber(summary.rate, 0), 0, 1);
  const yearlyTax = Math.max(0, safeNumber(summary.yearlyTax, 0));
  const yearlyIpva = Math.max(0, safeNumber(summary.yearlyIpva, 0));
  const previousDebt = Math.max(0, safeNumber(summary.previousDebt, 0));
  const debtInterest = Math.max(0, safeNumber(summary.debtInterest, 0));
  const debtDue = Math.max(0, safeNumber(summary.debtDue, previousDebt + debtInterest));
  const cash = Math.max(0, safeNumber(state.money, 0));
  const fxTotal = Math.max(0, forexValueBrl("USD") + forexValueBrl("EUR"));
  const available = cash + fxTotal;
  const deficit = Math.max(0, due - available);

  el.taxDueText.textContent = `Total devido: ${formatMoney(due)}`;
  if (el.taxDetails) {
    el.taxDetails.innerHTML = `
      <div class="tax-grid">
        <div class="tax-block">
          <div class="tax-block-title">Resumo do ano</div>
          <div class="tax-row"><span>Receita total</span><strong>${formatMoney(totalYear)}</strong></div>
          <div class="tax-row"><span>Receita de cliques</span><strong>${formatMoney(clickYear)}</strong></div>
          <div class="tax-row"><span>Media mensal</span><strong>${formatMoney(avg)}</strong></div>
          <div class="tax-row"><span>Aliquota</span><strong>${(rate * 100).toFixed(1)}%</strong></div>
        </div>
        <div class="tax-block">
          <div class="tax-block-title">Composicao da cobranca</div>
          <div class="tax-row"><span>Imposto base</span><strong>${formatMoney(yearlyTax)}</strong></div>
          <div class="tax-row"><span>IPVA anual</span><strong>${formatMoney(yearlyIpva)}</strong></div>
          <div class="tax-row"><span>Divida anterior</span><strong>${formatMoney(previousDebt)}</strong></div>
          <div class="tax-row"><span>Juros da divida</span><strong>${formatMoney(debtInterest)}</strong></div>
          <div class="tax-row"><span>Total de divida antiga</span><strong>${formatMoney(debtDue)}</strong></div>
        </div>
        <div class="tax-block">
          <div class="tax-block-title">Capacidade de pagamento</div>
          <div class="tax-row"><span>Saldo em caixa</span><strong>${formatMoney(cash)}</strong></div>
          <div class="tax-row"><span>Conta global (USD+EUR)</span><strong>${formatMoney(fxTotal)}</strong></div>
          <div class="tax-row ${deficit > 0 ? "bad" : "ok"}"><span>Disponivel para quitar</span><strong>${formatMoney(available)}</strong></div>
          <div class="tax-row ${deficit > 0 ? "bad" : "ok"}"><span>${deficit > 0 ? "Falta para quitar" : "Sobra apos quitar"}</span><strong>${formatMoney(deficit > 0 ? deficit : available - due)}</strong></div>
        </div>
      </div>
    `;
  }
  el.taxOverlay.classList.add("show");
}

function closeYear(settleNow) {
  settleAviationYearlyCharges();
  const cattleRevenue = processFarmCattleSales();
  const summary = hasPendingTaxDecision() ? state.tax.pendingYearClose : buildAnnualCloseSummary();
  const {
    avg,
    rate,
    yearlyTax,
    yearlyIpva,
    previousDebt,
    debtInterest,
    totalDue
  } = summary;

  let paidFromCash = 0;
  let paidFromFx = 0;
  let paidTotal = 0;
  let paidDebtInterest = 0;
  let paidIpva = 0;

  if (settleNow) {
    let remaining = totalDue;
    paidFromCash = Math.min(state.money, remaining);
    state.money -= paidFromCash;
    remaining -= paidFromCash;

    if (remaining > 0) {
      const fx = liquidateForexForAmount(remaining);
      paidFromFx = fx.paid;
      remaining = fx.remaining;
      if (fx.soldUsd > 0) {
        logEvent(`Imposto: saque de ${formatUsd(fx.soldUsd)} da conta USD para quitar tributos.`, "warn");
      }
      if (fx.soldEur > 0) {
        logEvent(`Imposto: saque de ${formatEur(fx.soldEur)} da conta EUR para quitar tributos.`, "warn");
      }
    }

    paidTotal = totalDue - remaining;
    let alloc = paidTotal;
    const paidOldPrincipal = Math.min(alloc, previousDebt);
    alloc -= paidOldPrincipal;
    paidDebtInterest = Math.min(alloc, debtInterest);
    alloc -= paidDebtInterest;
    const paidYearlyTax = Math.min(alloc, yearlyTax);
    alloc -= paidYearlyTax;
    paidIpva = Math.min(alloc, yearlyIpva);

    state.stats.taxesPaid += paidTotal;
    state.stats.taxDebtInterestPaid += paidDebtInterest;
    state.stats.ipvaPaid += paidIpva;
    state.tax.debt = Math.max(0, remaining);
  } else {
    state.tax.debt = Math.max(0, totalDue);
    logEvent(`Imposto adiado para o proximo mes. Nova divida fiscal: ${formatMoney(state.tax.debt)}.`, "bad");
  }

  logEvent(
    `Fechamento anual: media ${formatMoney(avg)} | imposto base ${formatMoney(yearlyTax)} (${Math.round(rate * 100)}%) | IPVA ${formatMoney(yearlyIpva)} | divida anterior ${formatMoney(previousDebt)} + juros ${formatMoney(debtInterest)} | pago ${formatMoney(paidTotal)}.`,
    "warn"
  );
  if (state.tax.debt > 0) {
    logEvent(`Divida fiscal pendente: ${formatMoney(state.tax.debt)} (impostos/IPVA nao pagos acumularao juros no proximo fechamento anual).`, "bad");
  } else if (totalDue > 0) {
    logEvent(`Impostos/IPVA quitados. BRL ${formatMoney(paidFromCash)} + contas globais ${formatMoney(paidFromFx)}.`, "ok");
  }
  if (cattleRevenue > 0) {
    logEvent(`Venda anual de gado: +${formatMoney(cattleRevenue)}.`, "ok");
  }

  evolveEconomyYearly();
  applyYearlyInflation();
  logEvent(
    `Economia anual: inflacao ${(state.economy.inflation * 100).toFixed(1)}% | juros ${(state.economy.interest * 100).toFixed(1)}% | confianca ${(state.economy.confidence * 100).toFixed(0)}%.`,
    "warn"
  );
  state.yearlyRevenues = [];
  state.yearlyClickRevenue = 0;
  state.yearlyClickRevenue = 0;
  state.yearlyClickRevenue = 0;
  state.tax.pendingYearClose = null;
  state.month = 1;
  state.year += 1;
  state.secondsToMonth = MONTH_SECONDS;
  sfxTax();
}

function processMonth() {
  updateParticipationMarketMonthly();
  updateCompanyValuationsMonthly();
  updateCryptoMarketMonthly();
  const safMonthly = processSafMonth();
  const franchiseMonthly = processFranchiseMonth();
  const savingsYield = processSavingsMonth();
  const farmIncome = farmMonthlyIncome();
  const realEstateIncome = realEstateMonthlyIncome();
  const passive = effectiveCompanyIncome() + farmIncome + realEstateIncome;
  const opsCost = monthlyOperationalCost();
  const cryptoOps = cryptoOpsMonthlyCost();
  const payroll = monthlyPayrollCost();
  state.money += passive;
  state.money -= opsCost + cryptoOps + payroll;
  const loanPaid = processLoanPayment();
  const contractPayout = processContractsMonth();
  const totalCosts = opsCost + cryptoOps + payroll + loanPaid;
  const netPassive = passive - opsCost - cryptoOps - payroll - loanPaid + contractPayout + safMonthly.net;
  if (state.money < 0) state.money = 0;
  state.monthRevenue += netPassive;
  state.stats.companyRevenue += passive;
  state.stats.realEstateRevenue += realEstateIncome;
  state.stats.operationalCosts += opsCost + cryptoOps;
  state.stats.payrollPaid += payroll;
  state.reputation = clamp(
    state.reputation + (netPassive >= 0 ? 0.3 : -0.8) + state.research.branding * 0.05 - (state.loan.monthsLeft > 0 ? 0.1 : 0),
    0,
    100
  );

  state.yearlyRevenues.push(state.monthRevenue);
  logEvent(
    `Mes fechado: bruto ${formatMoney(passive)} | agro ${formatMoney(farmIncome)} | imoveis ${formatMoney(realEstateIncome)} | contratos ${formatMoney(contractPayout)} | SAF ${formatMoney(safMonthly.net)} | custos ${formatMoney(totalCosts)} (ops ${formatMoney(opsCost)}, mineracao ${formatMoney(cryptoOps)}, folha ${formatMoney(payroll)}, banco ${formatMoney(loanPaid)}) | liquido ${formatMoney(netPassive)}.`
  );
  if (franchiseMonthly.total > 0) {
    logEvent(
      `Franquia: ${franchiseMonthly.sales} venda(s) no mes | taxa de franquia ${formatMoney(franchiseMonthly.feeRevenue)} | royalties ${formatMoney(franchiseMonthly.royalties)} | conta franquias +${formatMoney(franchiseMonthly.total)}.`,
      "ok"
    );
  }
  if (savingsYield > 0) {
    logEvent(`Poupanca: rendimento de ${formatMoney(savingsYield)} no mes (juros compostos).`, "ok");
  }
  addXp(6 + Math.floor(passive / 1000));
  state.monthRevenue = 0;

  processTurnover();
  processGarageMonth();
  processAviationMonth();
  updateForexRates();
  evolveWorldWealthMonthly();
  if (state.month === 12) {
    state.tax.pendingYearClose = buildAnnualCloseSummary();
    state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
    state.secondsToMonth = MONTH_SECONDS;
    sfxMonthClose();
    updateTaxOverlay();
    render();
    return;
  }
  state.month += 1;
  maybeMarketEvent();
  state.secondsToMonth = MONTH_SECONDS;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  sfxMonthClose();
  render();
}

function animateClickFx(value) {
  el.clickBtn.classList.remove("flash");
  void el.clickBtn.offsetWidth;
  el.clickBtn.classList.add("flash");

  el.floatGain.textContent = `+${formatMoney(value)}`;
  el.floatGain.classList.remove("show");
  void el.floatGain.offsetWidth;
  el.floatGain.classList.add("show");
}

function renderUpgrades() {
  el.upgradeList.innerHTML = "";
  upgrades.forEach((u) => {
    const cost = calcUpgradeCost(u);
    const costMult = clickUpgradeCostMultiplier();
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${u.nome} (Nv. ${u.level})</div>
      <div class="meta">+${formatMoney(u.add)} no clique base | Custo: ${formatMoney(cost)}${costMult > 1 ? ` (x${costMult.toFixed(2)} por clique alto)` : ""}</div>
      <button class="btn" ${state.money < cost ? "disabled" : ""}>Comprar upgrade</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      if (state.money < cost) return;
      ensureAudio();
      state.money -= cost;
      state.clickValue += u.add;
      u.level += 1;
      state.stats.spentUpgrades += cost;
      addXp(5);
      logEvent(`Upgrade comprado: ${u.nome}. Novo clique base: ${formatMoney(state.clickValue)}.`);
      sfxBuy();
      render();
    });
    el.upgradeList.appendChild(card);
  });
}

function renderCompanies() {
  el.companyList.innerHTML = "";
  companies.forEach((c) => {
    const buyCost = calcCompanyCost(c);
    const upgradeCost = calcCompanyUpgradeCost(c);
    const perUnit = companyIncomePerUnit(c);
    const total = companyTotalIncome(c);
    const sectorMult = getSectorMultiplier(c.setor);
    const valuation = companyFairValuation(c);
    const offer = c.owned > 0 ? companySellOfferPerUnit(c) : 0;
    const marginIdx = clamp(safeInt(c.salaryTier, 1), 0, COMPANY_MARGIN_OPTIONS.length - 1);
    const marginCfg = COMPANY_MARGIN_OPTIONS[marginIdx];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${c.nome}</div>
      <div class="meta">Setor: ${escapeHtml(c.setor)} | Unidades: ${c.owned} | Nivel: ${c.level}</div>
      <div class="meta">Valuation estimado: ${formatMoney(valuation)}</div>
      <div class="meta">Ganho ao comprar: ${formatMoney(perUnit)}/mes por unidade</div>
      <div class="meta">Preco compra: ${formatMoney(buyCost)} | Upgrade: ${formatMoney(upgradeCost)}</div>
      <div class="meta">Oferta atual por unidade: ${c.owned > 0 ? formatMoney(offer) : "-"}</div>
      <div class="btn-row">
        <button class="btn" data-act="buy" ${state.money < buyCost ? "disabled" : ""}>Comprar unidade (${formatMoney(buyCost)})</button>
        <button class="btn alt" data-act="upg" ${state.money < upgradeCost || c.owned === 0 ? "disabled" : ""}>Upgrade (${formatMoney(upgradeCost)})</button>
      </div>
      <div class="btn-row">
        <button class="btn" data-act="margin">Ajustar margem (${marginCfg.label})</button>
        <button class="btn alt" data-act="sell" ${c.owned <= 0 ? "disabled" : ""}>Vender 1 (${c.owned > 0 ? formatMoney(offer) : "-"})</button>
      </div>
    `;
    card.querySelector('[data-act="buy"]').addEventListener("click", () => {
      if (state.money < buyCost) return;
      ensureAudio();
      state.money -= buyCost;
      c.owned += 1;
      state.stats.spentCompanies += buyCost;
      addXp(10);
      logEvent(`Nova unidade comprada: ${c.nome} (unidades: ${c.owned}).`);
      sfxBuy();
      render();
    });
    card.querySelector('[data-act="upg"]').addEventListener("click", () => {
      if (c.owned === 0 || state.money < upgradeCost) return;
      ensureAudio();
      state.money -= upgradeCost;
      c.level += 1;
      state.stats.spentCompanies += upgradeCost;
      addXp(14);
      logEvent(`Upgrade da ${c.nome} para nivel ${c.level}.`);
      sfxBuy();
      render();
    });
    card.querySelector('[data-act="sell"]').addEventListener("click", () => {
      if (c.owned <= 0) return;
      const sale = companySellOfferPerUnit(c);
      c.owned = Math.max(0, c.owned - 1);
      state.money += sale;
      state.monthRevenue += sale;
      logEvent(`Unidade vendida em ${c.nome} por proposta de ${formatMoney(sale)}.`, "ok");
      sfxBuy();
      render();
    });
    card.querySelector('[data-act="margin"]').addEventListener("click", () => {
      c.salaryTier = (marginIdx + 1) % COMPANY_MARGIN_OPTIONS.length;
      const next = COMPANY_MARGIN_OPTIONS[c.salaryTier];
      logEvent(`Margem da ${c.nome} ajustada para ${next.label} (x${next.mult.toFixed(2)}).`);
      render();
    });
    el.companyList.appendChild(card);
  });
}

function renderRealEstate() {
  if (!el.realEstateList || !el.realEstateSummary) return;
  const totalOwned = ownedRealEstateCount();
  const portfolio = realEstatePortfolioValue();
  const rental = realEstateMonthlyIncome();
  el.realEstateSummary.textContent = `${totalOwned} imoveis | Valor ${formatMoney(portfolio)} | Aluguel ${formatMoney(rental)}/mes`;
  el.realEstateList.innerHTML = "";

  realEstateCatalog.forEach((item) => {
    const owned = ownsRealEstate(item.id);
    const personalUse = item.tipo === "casa" && isHousePersonalUse(item.id);
    const rentValue = personalUse ? 0 : item.aluguelMensal;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${item.nome}</div>
      <div class="meta">Tipo: ${item.tipo === "casa" ? "Casa" : "Predio"} | Local: ${escapeHtml(item.localizacao)}</div>
      <div class="meta">Valor do imovel: ${formatMoney(item.valor)}</div>
      <div class="meta">Aluguel mensal: ${formatMoney(rentValue)}${personalUse ? " (uso pessoal)" : ""}</div>
      <div class="btn-row">
        <button class="btn" data-act="buy" ${owned || state.money < item.valor ? "disabled" : ""}>${owned ? "Comprado" : `Comprar (${formatMoney(item.valor)})`}</button>
        ${item.tipo === "casa"
          ? `<button class="btn alt" data-act="use" ${!owned ? "disabled" : ""}>${personalUse ? "Colocar para alugar" : "Usar pessoalmente"}</button>`
          : `<button class="btn alt" data-act="use" disabled>Predio sempre alugado</button>`}
      </div>
    `;

    const buyBtn = card.querySelector('[data-act="buy"]');
    buyBtn?.addEventListener("click", () => {
      if (owned || state.money < item.valor) return;
      state.money -= item.valor;
      state.realEstate.owned[item.id] = true;
      if (item.tipo === "casa") state.realEstate.personalUse[item.id] = false;
      state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
      logEvent(`Imovel comprado: ${item.nome} em ${item.localizacao} por ${formatMoney(item.valor)}.`, "ok");
      sfxBuy();
      render();
    });

    const useBtn = card.querySelector('[data-act="use"]');
    useBtn?.addEventListener("click", () => {
      if (!owned || item.tipo !== "casa") return;
      const next = !isHousePersonalUse(item.id);
      state.realEstate.personalUse[item.id] = next;
      logEvent(`${item.nome}: ${next ? "agora em uso pessoal (sem aluguel)." : "voltou para aluguel mensal."}`, "warn");
      render();
    });

    el.realEstateList.appendChild(card);
  });
}

function renderParticipations() {
  if (!el.participationList || !el.participationSummary) return;
  initParticipationMarket();
  const monthly = totalParticipationIncome();
  const invested = totalParticipationValue();
  const ownedCount = participationCatalog.filter((c) => safeNumber(state.participations.holdings[c.id], 0) > 0).length;
  el.participationSummary.textContent = `${ownedCount} posicao(oes) | Valor de mercado ${formatMoney(invested)} | Proventos estimados ${formatMoney(monthly)}/mes`;
  el.participationList.innerHTML = "";

  participationCatalog.forEach((c) => {
    const pct = clamp(safeNumber(state.participations.holdings[c.id], 0), 0, 100);
    const market = state.participations.market[c.id];
    const valuation = Math.max(0, safeNumber(market?.valuation, c.baseValuation));
    const prev = Math.max(0, safeNumber(market?.lastValuation, valuation));
    const variationPct = prev > 0 ? ((valuation - prev) / prev) * 100 : 0;
    const monthlyIncome = participationMonthlyIncome(c);
    const unit1 = Math.floor(valuation * 0.01 * 1.01);
    const unit5 = Math.floor(valuation * 0.05 * 1.01);
    const unit10 = Math.floor(valuation * 0.1 * 1.01);
    const sell1 = Math.floor(valuation * 0.01 * 0.99);
    const sell5 = Math.floor(valuation * 0.05 * 0.99);
    const sell10 = Math.floor(valuation * 0.1 * 0.99);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${escapeHtml(c.nome)} (${escapeHtml(c.ticker)})</div>
      <div class="meta">Setor: ${escapeHtml(c.setor)} | Valuation: ${formatMoney(valuation)} | Variacao mes: ${variationPct.toFixed(2)}%</div>
      <div class="meta">Sua participacao: ${pct.toFixed(1)}% (${participationControlLabel(pct)})</div>
      <div class="meta">Recebimento estimado: ${formatMoney(monthlyIncome)}/mes</div>
      <div class="btn-row">
        <button class="btn" data-act="buy1" ${state.money < unit1 || pct >= 100 ? "disabled" : ""}>Comprar 1%</button>
        <button class="btn" data-act="buy5" ${state.money < unit5 || pct >= 100 ? "disabled" : ""}>Comprar 5%</button>
      </div>
      <div class="btn-row">
        <button class="btn" data-act="buy10" ${state.money < unit10 || pct >= 100 ? "disabled" : ""}>Comprar 10%</button>
        <button class="btn alt" data-act="sell1" ${pct < 1 ? "disabled" : ""}>Vender 1%</button>
      </div>
      <div class="btn-row">
        <button class="btn alt" data-act="sell5" ${pct < 5 ? "disabled" : ""}>Vender 5%</button>
        <button class="btn alt" data-act="sell10" ${pct < 10 ? "disabled" : ""}>Vender 10%</button>
      </div>
      <div class="meta">Custo compra (1/5/10%): ${formatMoney(unit1)} / ${formatMoney(unit5)} / ${formatMoney(unit10)}</div>
      <div class="meta">Recebe na venda (1/5/10%): ${formatMoney(sell1)} / ${formatMoney(sell5)} / ${formatMoney(sell10)}</div>
    `;
    card.querySelector('[data-act="buy1"]').addEventListener("click", () => buyParticipation(c.id, 1));
    card.querySelector('[data-act="buy5"]').addEventListener("click", () => buyParticipation(c.id, 5));
    card.querySelector('[data-act="buy10"]').addEventListener("click", () => buyParticipation(c.id, 10));
    card.querySelector('[data-act="sell1"]').addEventListener("click", () => sellParticipation(c.id, 1));
    card.querySelector('[data-act="sell5"]').addEventListener("click", () => sellParticipation(c.id, 5));
    card.querySelector('[data-act="sell10"]').addEventListener("click", () => sellParticipation(c.id, 10));
    el.participationList.appendChild(card);
  });
}

function buyCar(modelId) {
  const model = carCatalog.find((x) => x.id === modelId);
  if (!model) return;
  if (state.money < model.price) {
    setStatus("Saldo insuficiente para comprar esse carro.", "bad");
    return;
  }
  state.money -= model.price;
  state.garage.push({
    id: state.nextCarId++,
    modelId: model.id,
    nome: model.nome,
    originalPrice: model.price,
    currentValue: model.price,
    km: 0,
    monthsOwned: 0
  });
  logEvent(`Carro comprado: ${model.nome} por ${formatMoney(model.price)}.`, "ok");
  sfxBuy();
  render();
}

function sellCar(carId) {
  const idx = state.garage.findIndex((c) => c.id === carId);
  if (idx < 0) return;
  const car = state.garage[idx];
  state.money += car.currentValue;
  state.monthRevenue += car.currentValue;
  state.stats.carSalesRevenue += car.currentValue;
  state.garage.splice(idx, 1);
  logEvent(`Carro vendido: ${car.nome} por ${formatMoney(car.currentValue)}.`, "ok");
  sfxBuy();
  render();
}

function processGarageMonth() {
  if (!state.garage.length) return;
  const survivors = [];
  state.garage.forEach((car) => {
    const kmGain = Math.floor(700 + Math.random() * 1300 + car.monthsOwned * 3);
    car.km += kmGain;
    car.monthsOwned += 1;
    const wearRate = 0.008 + kmGain / 140000 + car.monthsOwned / 2200 + (car.km > 120000 ? 0.006 : 0);
    const floor = car.originalPrice * 0.08;
    car.currentValue = Math.max(floor, car.currentValue * (1 - wearRate));
    const broke = car.km >= 420000 || Math.random() < carBreakRisk(car);
    if (broke) {
      state.stats.carsBroken += 1;
      logEvent(`Carro quebrado sem recuperacao: ${car.nome} (${Math.floor(car.km)} km).`, "bad");
      return;
    }
    survivors.push(car);
  });
  state.garage = survivors;
}

function renderCarShop() {
  el.carShopList.innerHTML = "";
  carCatalog.forEach((model) => {
    const card = document.createElement("div");
    card.className = "card";
    const ipva = model.price * 0.05;
    card.innerHTML = `
      <div class="title">${escapeHtml(model.nome)}</div>
      <div class="meta">Preco de referencia: ${formatMoney(model.price)}</div>
      <div class="meta">IPVA anual estimado (5%): ${formatMoney(ipva)}</div>
      <button class="btn" ${state.money < model.price ? "disabled" : ""}>Comprar carro</button>
    `;
    card.querySelector("button").addEventListener("click", () => buyCar(model.id));
    el.carShopList.appendChild(card);
  });

  const garageValue = garageTotalValue();
  const ipva = garageAnnualIpva();
  el.garageSummary.textContent = `${state.garage.length} carro(s) | Valor ${formatMoney(garageValue)} | IPVA anual ${formatMoney(ipva)}`;
  el.garageList.innerHTML = "";

  if (!state.garage.length) {
    el.garageList.innerHTML = `<div class="mini">Sem carros na garagem.</div>`;
    return;
  }

  state.garage
    .slice()
    .sort((a, b) => b.currentValue - a.currentValue)
    .forEach((car) => {
      const risk = carBreakRisk(car);
      const riskPct = Math.round(risk * 100);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${escapeHtml(car.nome)}</div>
        <div class="meta">Valor atual: ${formatMoney(car.currentValue)} | Valor original: ${formatMoney(car.originalPrice)}</div>
        <div class="meta">Km: ${Math.floor(car.km).toLocaleString("pt-BR")} | Uso: ${car.monthsOwned} mes(es)</div>
        <div class="meta">Risco de quebra mensal: ${riskPct}% ${riskPct >= 65 ? "(muito alto)" : ""}</div>
        <button class="btn alt">Vender carro</button>
      `;
      card.querySelector("button").addEventListener("click", () => sellCar(car.id));
      el.garageList.appendChild(card);
    });
}

function buyAircraft(modelId) {
  const model = aircraftCatalog.find((x) => x.id === modelId);
  if (!model) return;
  const priceUsd = model.priceUsd;
  if (state.forex.usd.balance < priceUsd) {
    setStatus("Saldo USD insuficiente para comprar esse aviao.", "bad");
    return;
  }
  state.forex.usd.balance -= priceUsd;
  state.aviation.fleet.push({
    id: state.aviation.nextAircraftId++,
    modelId: model.id,
    nome: model.nome,
    originalPriceUsd: model.priceUsd,
    currentValueUsd: model.priceUsd,
    cruiseKmh: model.cruiseKmh,
    opCostUsdPerHour: model.opCostUsdPerHour,
    flightHours: 0,
    totalKm: 0,
    monthsOwned: 0
  });
  if (!state.aviation.selectedAircraftId) state.aviation.selectedAircraftId = state.aviation.fleet[0].id;
  logEvent(`Aviao comprado: ${model.nome} por ${formatUsd(priceUsd)}.`, "ok");
  sfxBuy();
  render();
}

function sellAircraft(aircraftId) {
  const idx = state.aviation.fleet.findIndex((a) => a.id === aircraftId);
  if (idx < 0) return;
  const aircraft = state.aviation.fleet[idx];
  state.forex.usd.balance += aircraft.currentValueUsd;
  state.monthRevenue += aircraft.currentValueUsd * state.forex.usd.rate;
  state.aviation.fleet.splice(idx, 1);
  if (state.aviation.selectedAircraftId === aircraftId) {
    state.aviation.selectedAircraftId = state.aviation.fleet.length ? state.aviation.fleet[0].id : 0;
  }
  logEvent(`Aviao vendido: ${aircraft.nome} por ${formatUsd(aircraft.currentValueUsd)}.`, "ok");
  sfxBuy();
  render();
}

function processAviationMonth() {
  if (state.aviation.fleet.length > 0) {
    const monthlyFixedUsd = state.aviation.fleet.length * (aircraftMonthlyHangarUsd() + aircraftMonthlyCrewUsd());
    state.aviation.accruedUsd += monthlyFixedUsd;
  }
  state.aviation.fleet.forEach((a) => {
    a.monthsOwned += 1;
    const ageWear = 0.0012;
    a.currentValueUsd = Math.max(a.originalPriceUsd * 0.25, a.currentValueUsd * (1 - ageWear));
  });
}

function settleAviationYearlyCharges() {
  const previousDebt = Math.max(0, state.aviation.debtUsd);
  const debtInterest = previousDebt * state.economy.interest;
  const taxDue = state.aviation.fleet.reduce((sum, a) => sum + aircraftTaxUsd(a), 0);
  const accruedDue = Math.max(0, state.aviation.accruedUsd);
  const hangarDue = accruedDue * 0.5;
  const crewDue = accruedDue * 0.5;
  const totalDueUsd = previousDebt + debtInterest + taxDue + accruedDue;

  const paidUsd = Math.min(state.forex.usd.balance, totalDueUsd);
  state.forex.usd.balance -= paidUsd;
  state.aviation.debtUsd = Math.max(0, totalDueUsd - paidUsd);
  state.aviation.accruedUsd = 0;

  let alloc = paidUsd;
  const paidOldDebt = Math.min(alloc, previousDebt);
  alloc -= paidOldDebt;
  const paidDebtInterest = Math.min(alloc, debtInterest);
  alloc -= paidDebtInterest;
  const paidTax = Math.min(alloc, taxDue);
  alloc -= paidTax;
  const paidHangar = Math.min(alloc, hangarDue);
  alloc -= paidHangar;
  const paidCrew = Math.min(alloc, crewDue);

  state.stats.aircraftDebtInterestPaidUsd += paidDebtInterest;
  state.stats.aircraftTaxPaidUsd += paidTax;
  state.stats.aircraftHangarPaidUsd += paidHangar;
  state.stats.aircraftCrewPaidUsd += paidCrew;

  if (totalDueUsd > 0) {
    logEvent(
      `Aviacao anual: imposto ${formatUsd(taxDue)} | hangar ${formatUsd(hangarDue)} | tripulacao ${formatUsd(crewDue)} | pago ${formatUsd(paidUsd)} | pendente ${formatUsd(state.aviation.debtUsd)}.`,
      state.aviation.debtUsd > 0 ? "warn" : "ok"
    );
  }
}

function tripCostBrl(aircraft, route) {
  const oneWayKm = route.km;
  const distance = oneWayKm * 2; // round-trip: ida e volta
  const cruiseHours = distance / aircraft.cruiseKmh;
  const flightHours = cruiseHours * 1.08;
  const baseOp = flightHours * aircraft.opCostUsdPerHour;
  const luxuryFactor = clamp(aircraft.originalPriceUsd / 15000000, 0.8, 4);
  const routeFee = (route.airportFeeUsd + (route.pais === "Brasil" ? 350 : 1500)) * 2;
  const totalUsd = (baseOp + routeFee) * luxuryFactor;
  return {
    oneWayKm,
    roundTripKm: distance,
    flightHours,
    totalUsd,
    totalBrl: totalUsd * state.forex.usd.rate
  };
}

function travelRoute(routeId) {
  const route = travelRoutes.find((r) => r.id === routeId);
  const aircraftId = safeInt(el.travelAircraftSelect.value, 0);
  const aircraft = state.aviation.fleet.find((a) => a.id === aircraftId);
  if (!route || !aircraft) {
    setStatus("Selecione um aviao valido para viajar.", "warn");
    return;
  }
  const trip = tripCostBrl(aircraft, route);
  if (state.money < trip.totalBrl) {
    setStatus("Saldo em BRL insuficiente para essa viagem.", "bad");
    return;
  }

  state.money -= trip.totalBrl;
  state.stats.travelSpendBrl += trip.totalBrl;
  state.stats.totalFlightKm += trip.roundTripKm;
  state.stats.totalFlightHours += trip.flightHours;

  aircraft.flightHours += trip.flightHours;
  aircraft.totalKm += trip.roundTripKm;
  const tripWear = clamp(0.002 + trip.flightHours * 0.00045, 0.002, 0.03);
  aircraft.currentValueUsd = Math.max(aircraft.originalPriceUsd * 0.25, aircraft.currentValueUsd * (1 - tripWear));

  state.passport.totalTrips += 1;
  const key = route.pais;
  if (!state.passport.countries[key]) {
    state.passport.countries[key] = { name: route.pais, visits: 0, firstYear: state.year, firstMonth: state.month };
  }
  state.passport.countries[key].visits += 1;
  state.aviation.selectedAircraftId = aircraft.id;

  logEvent(
    `Viagem privada (ida e volta): Sao Paulo -> ${route.destino} (${trip.roundTripKm.toLocaleString("pt-BR")} km) com ${aircraft.nome}. Custo ${formatMoney(trip.totalBrl)}.`,
    "warn"
  );
  render();
}

function renderAircraftShop() {
  const fleetUsd = state.aviation.fleet.reduce((sum, a) => sum + a.currentValueUsd, 0);
  const annualDue = aviationAnnualDueUsdPreview();
  el.aircraftSummary.textContent = `${state.aviation.fleet.length} aviao(es) | Valor ${formatUsd(fleetUsd)}`;
  el.aircraftAnnualDue.textContent = formatUsd(annualDue);
  el.aircraftDebtUsd.textContent = formatUsd(state.aviation.debtUsd);

  el.aircraftShopList.innerHTML = "";
  aircraftCatalog.forEach((model) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${escapeHtml(model.nome)}</div>
      <div class="meta">Preco: ${formatUsd(model.priceUsd)} | Cruzeiro: ${model.cruiseKmh} km/h</div>
      <div class="meta">Custo operacional medio: ${formatUsd(model.opCostUsdPerHour)}/h</div>
      <button class="btn" ${state.forex.usd.balance < model.priceUsd ? "disabled" : ""}>Comprar em USD</button>
    `;
    card.querySelector("button").addEventListener("click", () => buyAircraft(model.id));
    el.aircraftShopList.appendChild(card);
  });

  el.aircraftFleetList.innerHTML = "";
  if (!state.aviation.fleet.length) {
    el.aircraftFleetList.innerHTML = `<div class="mini">Sem avioes na frota.</div>`;
  } else {
    state.aviation.fleet
      .slice()
      .sort((a, b) => b.currentValueUsd - a.currentValueUsd)
      .forEach((aircraft) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="title">${escapeHtml(aircraft.nome)}</div>
          <div class="meta">Valor atual: ${formatUsd(aircraft.currentValueUsd)} | Original: ${formatUsd(aircraft.originalPriceUsd)}</div>
          <div class="meta">Horas voo: ${aircraft.flightHours.toFixed(1)}h | Distancia: ${Math.floor(aircraft.totalKm).toLocaleString("pt-BR")} km</div>
          <div class="meta">IPVA anual (5%): ${formatUsd(aircraftTaxUsd(aircraft))}</div>
          <button class="btn alt">Vender aviao</button>
        `;
        card.querySelector("button").addEventListener("click", () => sellAircraft(aircraft.id));
        el.aircraftFleetList.appendChild(card);
      });
  }
}

function renderTravel() {
  el.travelAircraftSelect.innerHTML = "";
  if (!state.aviation.fleet.length) {
    el.travelAircraftInfo.textContent = "Sem aviao";
    el.travelStats.textContent = "Compre um aviao para liberar viagens privadas.";
    el.routeList.innerHTML = `<div class="mini">Sem rotas disponiveis sem aviao.</div>`;
    return;
  }

  if (!state.aviation.fleet.find((a) => a.id === state.aviation.selectedAircraftId)) {
    state.aviation.selectedAircraftId = state.aviation.fleet[0].id;
  }

  state.aviation.fleet.forEach((a) => {
    const opt = document.createElement("option");
    opt.value = String(a.id);
    opt.textContent = `${a.nome} (${formatUsd(a.currentValueUsd)})`;
    if (a.id === state.aviation.selectedAircraftId) opt.selected = true;
    el.travelAircraftSelect.appendChild(opt);
  });

  const selected = state.aviation.fleet.find((a) => a.id === safeInt(el.travelAircraftSelect.value, 0)) || state.aviation.fleet[0];
  if (selected) state.aviation.selectedAircraftId = selected.id;
  el.travelAircraftInfo.textContent = selected ? `${selected.nome} | ${selected.flightHours.toFixed(1)}h voo` : "Sem aviao";
  el.travelStats.textContent = `Gasto total em viagens: ${formatMoney(state.stats.travelSpendBrl)} | Distancia: ${Math.floor(state.stats.totalFlightKm).toLocaleString("pt-BR")} km`;

  el.routeList.innerHTML = "";
  travelRoutes.forEach((route) => {
    const trip = selected ? tripCostBrl(selected, route) : { totalBrl: 0 };
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="title">${escapeHtml(route.origem)} -> ${escapeHtml(route.destino)} (${escapeHtml(route.pais)})</div>
      <div class="meta">Distancia ida e volta: ${trip.roundTripKm.toLocaleString("pt-BR")} km (ida ${route.km.toLocaleString("pt-BR")} km)</div>
      <div class="meta">Estimativa de custo: ${formatMoney(trip.totalBrl)} (debita BRL da conta pessoal)</div>
      <button class="btn" ${state.money < trip.totalBrl ? "disabled" : ""}>Viajar nesta rota</button>
    `;
    card.querySelector("button").addEventListener("click", () => travelRoute(route.id));
    el.routeList.appendChild(card);
  });
}

function buyCryptoSpace(spaceId) {
  const space = cryptoSpaceById(spaceId);
  if (!space) return;
  const owned = Math.max(0, safeInt(state.crypto.spaces[space.id], 0));
  const cost = Math.floor(space.baseCost * Math.pow(1.26, owned));
  if (state.money < cost) {
    setStatus(`Saldo insuficiente para ${space.nome}.`, "bad");
    return;
  }
  state.money -= cost;
  state.crypto.spaces[space.id] = owned + 1;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  addXp(8);
  logEvent(`Novo espaco de mineracao adquirido: ${space.nome}. Capacidade +${space.capacityUnits * GPU_CAPACITY_PER_UNIT} GPUs.`, "ok");
  sfxBuy();
  render();
}

function buyCryptoGpu(gpuId) {
  const gpu = cryptoGpuById(gpuId);
  if (!gpu) return;
  const totalGpus = totalCryptoGpus();
  const capacity = totalCryptoCapacity();
  if (capacity <= 0) {
    setStatus("Compre um espaco de mineracao antes de comprar GPUs.", "warn");
    return;
  }
  if (totalGpus >= capacity) {
    setStatus("Capacidade lotada. Compre mais espaco para instalar novas placas.", "warn");
    return;
  }
  if (state.money < gpu.price) {
    setStatus(`Saldo insuficiente para ${gpu.nome}.`, "bad");
    return;
  }
  state.money -= gpu.price;
  state.crypto.gpus[gpu.id] = Math.max(0, safeInt(state.crypto.gpus[gpu.id], 0)) + 1;
  addXp(4);
  logEvent(`GPU comprada: ${gpu.nome} (+${gpu.hashMh} MH/s).`, "ok");
  sfxBuy();
  render();
}

function sellCryptoGpu(gpuId) {
  const gpu = cryptoGpuById(gpuId);
  if (!gpu) return;
  const qty = Math.max(0, safeInt(state.crypto.gpus[gpu.id], 0));
  if (qty <= 0) return;
  const sellPrice = cryptoGpuSellPrice(gpu);
  state.crypto.gpus[gpu.id] = qty - 1;
  state.money += sellPrice;
  state.monthRevenue += sellPrice;
  logEvent(`GPU vendida: ${gpu.nome} por ${formatMoney(sellPrice)}.`, "warn");
  sfxBuy();
  render();
}

function convertCryptoToUsd(coinId) {
  const coin = cryptoCoinById(coinId);
  const qty = Math.max(0, safeNumber(state.crypto.coins[coin.id], 0));
  if (qty <= 0) {
    setStatus(`Sem saldo em ${coin.id} para converter.`, "warn");
    return;
  }
  const price = Math.max(1, safeNumber(state.crypto.market[coin.id], coin.priceUsd));
  const usd = qty * price;
  state.crypto.coins[coin.id] = 0;
  state.forex.usd.balance += usd;
  logEvent(`Conversao ${coin.id}: ${formatCoinAmount(qty)} ${coin.id} -> ${formatUsd(usd)} em conta USD.`, "ok");
  sfxBuy();
  render();
}

function convertAllCryptoToUsd() {
  let totalUsd = 0;
  cryptoCoinsCatalog.forEach((coin) => {
    const qty = Math.max(0, safeNumber(state.crypto.coins[coin.id], 0));
    if (qty <= 0) return;
    const price = Math.max(1, safeNumber(state.crypto.market[coin.id], coin.priceUsd));
    totalUsd += qty * price;
    state.crypto.coins[coin.id] = 0;
  });
  if (totalUsd <= 0) {
    setStatus("Carteira cripto vazia.", "warn");
    return;
  }
  state.forex.usd.balance += totalUsd;
  logEvent(`Carteira cripto convertida integralmente: +${formatUsd(totalUsd)} na conta USD.`, "ok");
  sfxBuy();
  render();
}

function renderCrypto() {
  if (!el.cryptoSummary) return;

  if (el.cryptoCoinSelect && !el.cryptoCoinSelect.options.length) {
    el.cryptoCoinSelect.innerHTML = "";
    cryptoCoinsCatalog.forEach((coin) => {
      const opt = document.createElement("option");
      opt.value = coin.id;
      opt.textContent = `${coin.id} (${coin.nome})`;
      el.cryptoCoinSelect.appendChild(opt);
    });
  }

  const selected = cryptoCoinById(state.crypto.selectedCoinId);
  if (el.cryptoCoinSelect) {
    el.cryptoCoinSelect.value = selected.id;
  }

  const used = totalCryptoGpus();
  const capacity = totalCryptoCapacity();
  const hashMh = totalCryptoHashMh();
  const rate = cryptoMiningRatePerSecond(selected.id);
  const walletUsd = cryptoTotalUsdValue();
  const opsMonthly = cryptoOpsMonthlyCost();

  el.cryptoSummary.textContent = `${used} placas | ${used}/${capacity} vagas`;
  if (el.cryptoCoinPrice) el.cryptoCoinPrice.textContent = `${selected.id} @ ${formatUsd(state.crypto.market[selected.id])}`;
  if (el.cryptoPowerLine) el.cryptoPowerLine.textContent = `${hashMh.toLocaleString("pt-BR")} MH/s`;
  if (el.cryptoMineRate) el.cryptoMineRate.textContent = `${formatCoinAmount(rate)} ${selected.id}/s`;
  if (el.cryptoWalletSummary) el.cryptoWalletSummary.textContent = `${formatUsd(walletUsd)} (equivalente em USD)`;
  if (el.cryptoOpsCost) el.cryptoOpsCost.textContent = formatMoney(opsMonthly);

  if (el.cryptoSpaceList) {
    el.cryptoSpaceList.innerHTML = "";
    cryptoMiningSpacesCatalog.forEach((space) => {
      const owned = Math.max(0, safeInt(state.crypto.spaces[space.id], 0));
      const cost = Math.floor(space.baseCost * Math.pow(1.26, owned));
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${space.nome} (x${owned})</div>
        <div class="meta">Capacidade: +${space.capacityUnits * GPU_CAPACITY_PER_UNIT} placas | Taxa mensal: ${formatMoney(space.powerFeeMonthly)}</div>
        <button class="btn" ${state.money < cost ? "disabled" : ""}>Comprar espaco (${formatMoney(cost)})</button>
      `;
      card.querySelector("button").addEventListener("click", () => buyCryptoSpace(space.id));
      el.cryptoSpaceList.appendChild(card);
    });
  }

  if (el.cryptoGpuList) {
    el.cryptoGpuList.innerHTML = "";
    cryptoGpuCatalog.forEach((gpu) => {
      const qty = Math.max(0, safeInt(state.crypto.gpus[gpu.id], 0));
      const sell = cryptoGpuSellPrice(gpu);
      const atCapacity = capacity > 0 && used >= capacity;
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${gpu.nome}</div>
        <div class="meta">Hash: ${gpu.hashMh} MH/s | Consumo: ${gpu.watts}W | Estoque: ${qty}</div>
        <div class="btn-row">
          <button class="btn" ${state.money < gpu.price || capacity <= 0 || atCapacity ? "disabled" : ""}>Comprar (${formatMoney(gpu.price)})</button>
          <button class="btn alt" ${qty <= 0 ? "disabled" : ""}>Vender (${formatMoney(sell)})</button>
        </div>
      `;
      const [buyBtn, sellBtn] = card.querySelectorAll("button");
      buyBtn.addEventListener("click", () => buyCryptoGpu(gpu.id));
      sellBtn.addEventListener("click", () => sellCryptoGpu(gpu.id));
      el.cryptoGpuList.appendChild(card);
    });
  }

  if (el.cryptoConvertList) {
    el.cryptoConvertList.innerHTML = "";
    cryptoCoinsCatalog.forEach((coin) => {
      const qty = Math.max(0, safeNumber(state.crypto.coins[coin.id], 0));
      const usdValue = qty * Math.max(1, safeNumber(state.crypto.market[coin.id], coin.priceUsd));
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${coin.nome} (${coin.id})</div>
        <div class="meta">Saldo: ${formatCoinAmount(qty)} ${coin.id}</div>
        <div class="meta">Valor estimado: ${formatUsd(usdValue)}</div>
        <button class="btn alt" ${qty <= 0 ? "disabled" : ""}>Converter para USD</button>
      `;
      card.querySelector("button").addEventListener("click", () => convertCryptoToUsd(coin.id));
      el.cryptoConvertList.appendChild(card);
    });
  }
}

function renderPassport() {
  const entries = Object.values(state.passport.countries || {});
  const countriesCount = entries.filter((x) => x.name !== "Brasil").length;
  el.passportSummary.textContent = `Viagens: ${state.passport.totalTrips} | Paises internacionais visitados: ${countriesCount}`;
  el.passportList.innerHTML = "";
  if (!entries.length) {
    el.passportList.innerHTML = `<div class="mini">Nenhum registro de viagem ainda.</div>`;
    return;
  }
  entries
    .slice()
    .sort((a, b) => b.visits - a.visits)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">${escapeHtml(p.name)}</div>
        <div class="meta">Visitas: ${p.visits}</div>
        <div class="meta">Primeira viagem: Ano ${p.firstYear}, Mes ${p.firstMonth}</div>
      `;
      el.passportList.appendChild(card);
    });
}

function profileText() {
  const p = state.player;
  if (!p.nome) return "Personagem ainda nao criado.";
  return `${p.nome}, ${p.idade} anos, tel ${p.telefone || "nao vinculado"}`;
}

function resetCharacter() {
  const ok = confirm("Reset total?\nIsso vai apagar TODO o progresso do jogo (dinheiro, empresas, upgrades, ranking e personagem).");
  if (!ok) return;

  state.player = { nome: "", idade: "", telefone: "" };
  state.money = 0;
  state.clickValue = 10;
  state.monthRevenue = 0;
  state.year = 1;
  state.month = 1;
  state.secondsToMonth = MONTH_SECONDS;
  state.yearlyRevenues = [];
  state.yearlyClickRevenue = 0;
  state.level = 1;
  state.xp = 0;
  state.reputation = 50;
  state.prestigePoints = 0;
  state.clickCombo = { streak: 0, best: 0, lastTs: 0 };
  state.farm = { name: "", hectares: 0, investments: {}, cattle: [], nextCattleId: 1 };
  state.realEstate = { owned: {}, personalUse: {} };
  farmInvestments.forEach((inv) => {
    state.farm.investments[inv.id] = 0;
  });
  state.research = { automation: 0, hr: 0, branding: 0 };
  state.contracts = { lastOfferMonthStamp: 0, offers: [], active: [] };
  state.dailyMissions = { dateKey: "", list: [] };
  state.economy = { inflation: 0.04, interest: 0.09, confidence: 1, sectorBoosts: {} };
  state.loan = { principalRemaining: 0, installment: 0, monthsLeft: 0, annualRate: 0, label: "" };
  state.tax = { debt: 0, pendingYearClose: null };
  state.participations = { holdings: {}, market: {} };
  state.aviation = { fleet: [], nextAircraftId: 1, accruedUsd: 0, debtUsd: 0, selectedAircraftId: 0 };
  state.passport = { countries: {}, totalTrips: 0 };
  state.saf = defaultSafState();
  state.worldWealth = {};
  state.garage = [];
  state.nextCarId = 1;
  state.forex = {
    usd: { balance: 0, rate: 5.45, min: 4.9, max: 7.1 },
    eur: { balance: 0, rate: 7.15, min: 6.7, max: 7.8 }
  };
  state.crypto = defaultCryptoState();
  state.franchise = defaultFranchiseState();
  state.savings = { balance: 0, monthlyRate: 0.01, lastYield: 0, totalYield: 0 };
  state.stats = {
    totalClicks: 0,
    clickRevenue: 0,
    companyRevenue: 0,
    operationalCosts: 0,
    payrollPaid: 0,
    taxesPaid: 0,
    interestPaid: 0,
    contractRevenue: 0,
    realEstateRevenue: 0,
    dailyRevenue: 0,
    achievementRevenue: 0,
    loanReceived: 0,
    fxRevenue: 0,
    taxDebtInterestPaid: 0,
    ipvaPaid: 0,
    carSalesRevenue: 0,
    carsBroken: 0,
    travelSpendBrl: 0,
    totalFlightKm: 0,
    totalFlightHours: 0,
    aircraftTaxPaidUsd: 0,
    aircraftHangarPaidUsd: 0,
    aircraftCrewPaidUsd: 0,
    aircraftDebtInterestPaidUsd: 0,
    researchSpent: 0,
    spentUpgrades: 0,
    spentCompanies: 0,
    peakMoney: 0
  };
  state.logs = [];
  state.achievementsUnlocked = [];

  initialUpgradeBase.forEach((base) => {
    const u = upgrades.find((x) => x.id === base.id);
    if (!u) return;
    u.level = 0;
    u.baseCost = base.baseCost;
  });
  initialCompanyBase.forEach((base) => {
    const c = companies.find((x) => x.id === base.id);
    if (!c) return;
    c.baseCost = base.baseCost;
    c.baseIncome = base.baseIncome;
    c.owned = 0;
    c.level = 0;
    c.employees = 0;
    c.salaryTier = 1;
    c.marketFactor = 1;
    c.lastIncome = 0;
  });

  localStorage.removeItem(RANKING_KEY);
  initParticipationMarket();
  ensureWorldWealthInitialized();
  generateDailyMissions();
  adminSession.loggedIn = false;
  if (el.adminAccessInput) el.adminAccessInput.value = "";
  if (el.adminPasswordInput) el.adminPasswordInput.value = "";
  if (el.backupCode) el.backupCode.value = "";
  if (el.adminMoneyInput) el.adminMoneyInput.value = "";
  if (el.adminSetMoneyInput) el.adminSetMoneyInput.value = "";
  if (el.adminClickInput) el.adminClickInput.value = "";
  if (el.adminPrestigeInput) el.adminPrestigeInput.value = "";
  if (el.adminMonthInput) el.adminMonthInput.value = "";
  el.nameInput.value = "";
  el.ageInput.value = "";
  el.phoneInput.value = "";

  logEvent("Reset total executado. Novo jogo iniciado do zero.", "warn");
  setStatus("Reset total concluido.", "ok");
  saveDeviceProgress();
  render();
}

function canPrestige() {
  return getPatrimonio() >= 300000;
}

function doPrestige() {
  if (!canPrestige()) {
    setStatus("Precisa de patrimonio minimo de R$ 300.000 para prestigio.", "warn");
    return;
  }
  const ganho = Math.max(1, Math.floor(Math.sqrt(getPatrimonio() / 300000)));
  const ok = confirm(`Confirmar prestigio?\nVoce ganhara +${ganho} ponto(s) de prestigio e resetara economia atual.`);
  if (!ok) return;

  state.prestigePoints += ganho;
  state.money = 0;
  state.clickValue = 10;
  state.clickCombo = { streak: 0, best: 0, lastTs: 0 };
  state.monthRevenue = 0;
  state.year = 1;
  state.month = 1;
  state.secondsToMonth = MONTH_SECONDS;
  state.yearlyRevenues = [];
  upgrades.forEach((u) => {
    u.level = 0;
  });
  companies.forEach((c) => {
    c.owned = 0;
    c.level = 0;
    c.employees = 0;
    c.salaryTier = 1;
    c.marketFactor = 1;
    c.lastIncome = 0;
  });
  state.participations = { holdings: {}, market: {} };
  initParticipationMarket();
  state.loan = { principalRemaining: 0, installment: 0, monthsLeft: 0, annualRate: 0, label: "" };
  state.tax = { debt: 0, pendingYearClose: null };
  state.garage = [];
  state.nextCarId = 1;
  state.aviation = { fleet: [], nextAircraftId: 1, accruedUsd: 0, debtUsd: 0, selectedAircraftId: 0 };
  state.passport = { countries: {}, totalTrips: 0 };
  state.saf = defaultSafState();
  state.forex.usd.balance = 0;
  state.forex.eur.balance = 0;
  state.crypto = defaultCryptoState();
  state.franchise = defaultFranchiseState();
  state.savings = { balance: 0, monthlyRate: 0.01, lastYield: 0, totalYield: 0 };
  state.contracts = { lastOfferMonthStamp: 0, offers: [], active: [] };
  state.reputation = clamp(state.reputation + 4, 0, 100);
  state.farm = { name: "", hectares: 0, investments: {}, cattle: [], nextCattleId: 1 };
  state.realEstate = { owned: {}, personalUse: {} };
  farmInvestments.forEach((inv) => {
    state.farm.investments[inv.id] = 0;
  });
  generateDailyMissions();

  logEvent(`Prestigio realizado: +${ganho} ponto(s). Bonus permanente aumentado.`, "warn");
  setStatus("Prestigio realizado com sucesso.", "ok");
  sfxAchievement();
  render();
}

function render() {
  try {
    ensureDailyMissionsFresh();
    ensureContractOffers();
    checkAchievements();

  const clickGain = effectiveClickValue();
  const comboMult = currentClickComboMultiplier();
  const comboStreak = safeInt(state.clickCombo?.streak, 0);
  const companyIncome = effectiveCompanyIncome();
  const participationIncome = totalParticipationIncome();
  const farmIncome = farmMonthlyIncome();
  const realEstateIncome = realEstateMonthlyIncome();
  const safNetMonth = safeNumber(state.saf?.lastMonthly?.net, 0);
  const opsCost = monthlyOperationalCost();
  const cryptoOps = cryptoOpsMonthlyCost();
  const payrollCost = monthlyPayrollCost();
  const installment = totalMonthlyInstallment();
  const fixedAnnual = fixedAnnualCosts();
  const mult = getIncomeMultiplier();

  el.money.textContent = formatMoney(state.money);
  el.dateLine.textContent = `Ano ${state.year} | Mes ${state.month}`;
  el.countdown.textContent = hasPendingTaxDecision() ? "Aguardando decisao de imposto anual" : `Prox. mes em ${state.secondsToMonth}s`;
  el.clickLine.textContent = `Valor por clique: ${formatMoney(clickGain)} (base ${formatMoney(state.clickValue)} | combo x${comboMult.toFixed(2)})`;
  if (el.comboText) el.comboText.textContent = `Combo x${comboMult.toFixed(2)}`;
  if (el.comboStreak) el.comboStreak.textContent = `${comboStreak} cliques`;
  if (el.comboBar) {
    const pct = Math.min(100, (comboStreak / 30) * 100);
    el.comboBar.style.width = `${pct}%`;
  }
  el.incomeLine.textContent = `Renda mensal empresas/participacoes/agro/imoveis/SAF: ${formatMoney(companyIncome + farmIncome + realEstateIncome + safNetMonth)} (participacoes ${formatMoney(participationIncome)} | agro ${formatMoney(farmIncome)} | imoveis ${formatMoney(realEstateIncome)} | SAF ${formatMoney(safNetMonth)})`;
  el.econLine.textContent = `Economia: inflacao ${(state.economy.inflation * 100).toFixed(1)}% | juros ${(state.economy.interest * 100).toFixed(1)}% | confianca ${(state.economy.confidence * 100).toFixed(0)}%`;
  el.expenseLine.textContent = `Custos: ops ${formatMoney(opsCost)} + mineracao ${formatMoney(cryptoOps)} + folha ${formatMoney(payrollCost)} + banco ${formatMoney(installment)}`;
  if (el.fixedCostLine) {
    el.fixedCostLine.textContent = `Gastos fixos anuais: ${formatMoney(fixedAnnual)}`;
  }
  el.monthRevenue.textContent = formatMoney(state.monthRevenue);
  el.clickBtn.textContent = `CLICAR (+${formatMoney(clickGain)})`;
  el.profilePreview.textContent = profileText();

  const pct = ((MONTH_SECONDS - state.secondsToMonth) / MONTH_SECONDS) * 100;
  el.monthBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  el.skipMonthBtn.disabled = hasPendingTaxDecision();
  updateTaxOverlay();

  const patrimonio = getPatrimonio();
  el.statLevel.textContent = String(state.level);
  el.statXp.textContent = `${state.xp} / ${xpToNext(state.level)}`;
  el.statMultiplier.textContent = `x${mult.toFixed(2)}`;
  el.statPrestige.textContent = String(state.prestigePoints);
  el.statReputation.textContent = `${Math.round(state.reputation)}`;
  el.statWealth.textContent = formatMoney(patrimonio);
  el.statClicks.textContent = String(state.stats.totalClicks);
  el.statClickIncome.textContent = formatMoney(state.stats.clickRevenue);
  el.statCompanyIncome.textContent = formatMoney(state.stats.companyRevenue);
  el.statTaxPaid.textContent = formatMoney(state.stats.taxesPaid);
  el.statInterestPaid.textContent = formatMoney(state.stats.interestPaid);
  el.statPayrollPaid.textContent = formatMoney(state.stats.payrollPaid);
  el.statContractRevenue.textContent = formatMoney(state.stats.contractRevenue);
  el.statOpsCost.textContent = formatMoney(state.stats.operationalCosts);
  el.statPeak.textContent = formatMoney(state.stats.peakMoney);

  const usdBrl = forexValueBrl("USD");
  const eurBrl = forexValueBrl("EUR");
  const fxTotal = usdBrl + eurBrl;
  const savingsBalance = Math.max(0, safeNumber(state.savings?.balance, 0));
  const savingsLastYield = Math.max(0, safeNumber(state.savings?.lastYield, 0));

  el.bankCash.textContent = formatMoney(state.money);
  el.bankTaxDebt.textContent = formatMoney(state.tax.debt);
  if (el.savingsBalance) el.savingsBalance.textContent = formatMoney(savingsBalance);
  if (el.savingsMonthlyYield) el.savingsMonthlyYield.textContent = formatMoney(savingsLastYield);
  el.usdRate.textContent = `${formatMoney(state.forex.usd.rate)} por USD`;
  el.eurRate.textContent = `${formatMoney(state.forex.eur.rate)} por EUR`;
  el.usdWallet.textContent = formatUsd(state.forex.usd.balance);
  el.eurWallet.textContent = formatEur(state.forex.eur.balance);
  el.usdWalletBrl.textContent = formatMoney(usdBrl);
  el.eurWalletBrl.textContent = formatMoney(eurBrl);
  el.fxTotalBrl.textContent = formatMoney(fxTotal);

  el.workforceLine.textContent = `Modelo simples: renda base + nivel + margem | Custos operacionais baixos: ${formatMoney(opsCost)}/mes`;
  if (state.loan.monthsLeft > 0) {
    el.loanStatus.textContent = `${state.loan.label}: saldo ${formatMoney(state.loan.principalRemaining)} | parcela ${formatMoney(state.loan.installment)} | ${state.loan.monthsLeft} mes(es) restantes`;
  } else {
    el.loanStatus.textContent = "Sem emprestimo ativo.";
  }
  const loanActive = state.loan.monthsLeft > 0 || state.loan.principalRemaining > 0;
  el.loanSmallBtn.disabled = loanActive;
  el.loanMediumBtn.disabled = loanActive;
  el.loanLargeBtn.disabled = loanActive;
  el.usdBuyBtn.disabled = state.money < 1;
  el.eurBuyBtn.disabled = state.money < 1;
  if (el.savingsDepositBtn) el.savingsDepositBtn.disabled = state.money < 1;
  if (el.savingsWithdrawBtn) el.savingsWithdrawBtn.disabled = savingsBalance < 1;
  el.usdSellAllBtn.disabled = state.forex.usd.balance <= 0;
  el.eurSellAllBtn.disabled = state.forex.eur.balance <= 0;

  el.researchAutomation.textContent = `Nv. ${state.research.automation}`;
  el.researchHr.textContent = `Nv. ${state.research.hr}`;
  el.researchBranding.textContent = `Nv. ${state.research.branding}`;
  el.researchAutomationBtn.textContent = `Investir em automacao (${formatMoney(researchCost("automation"))})`;
  el.researchHrBtn.textContent = `Investir em RH (${formatMoney(researchCost("hr"))})`;
  el.researchBrandingBtn.textContent = `Investir em marca (${formatMoney(researchCost("branding"))})`;
  el.researchAutomationBtn.disabled = state.money < researchCost("automation");
  el.researchHrBtn.disabled = state.money < researchCost("hr");
  el.researchBrandingBtn.disabled = state.money < researchCost("branding");

  el.prestigeBonusText.textContent = `x${(1 + state.prestigePoints * 0.1).toFixed(2)}`;
  el.prestigeBtn.disabled = !canPrestige();
  renderAdminPanel();

  renderContracts();
  renderUpgrades();
  renderCompanies();
  renderRealEstate();
  renderParticipations();
  renderCarShop();
  renderFarm();
  renderAircraftShop();
  renderTravel();
  renderCrypto();
  renderFranchise();
  renderPassport();
  renderSaf();
  renderAchievements();
  renderDailyMissions();
  renderRanking();
  renderWorldRanking();
    el.eventLog.innerHTML = state.logs.join("");
  } catch (err) {
    console.error("Render error:", err);
    if (el.statusMsg) {
      el.statusMsg.className = "mini bad";
      el.statusMsg.textContent = `Erro no jogo: ${err?.message || err}`;
    }
  }
}

function serializeState() {
  return {
    version: 19,
    player: state.player,
    money: state.money,
    clickValue: state.clickValue,
    monthRevenue: state.monthRevenue,
    year: state.year,
    month: state.month,
    secondsToMonth: state.secondsToMonth,
    yearlyRevenues: state.yearlyRevenues,
    yearlyClickRevenue: state.yearlyClickRevenue,
    level: state.level,
    xp: state.xp,
    reputation: state.reputation,
    prestigePoints: state.prestigePoints,
    clickCombo: state.clickCombo,
    research: state.research,
    contracts: state.contracts,
    dailyMissions: state.dailyMissions,
    economy: state.economy,
    loan: state.loan,
    tax: state.tax,
    participations: state.participations,
    aviation: state.aviation,
    passport: state.passport,
    saf: state.saf,
    worldWealth: state.worldWealth,
    garage: state.garage,
    nextCarId: state.nextCarId,
    forex: state.forex,
    crypto: state.crypto,
    franchise: state.franchise,
    savings: state.savings,
    farm: state.farm,
    realEstate: state.realEstate,
    stats: state.stats,
    achievementsUnlocked: state.achievementsUnlocked,
    upgrades: upgrades.map((u) => ({ id: u.id, level: u.level })),
    companies: companies.map((c) => ({ id: c.id, owned: c.owned, level: c.level, employees: c.employees, salaryTier: c.salaryTier, marketFactor: c.marketFactor, lastIncome: c.lastIncome })),
    logs: state.logs
  };
}

function applySave(data) {
  if (!data || ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].includes(safeInt(data.version, 0))) throw new Error("Save invalido");

  if (data.player && typeof data.player === "object") {
    state.player = {
      nome: String(data.player.nome || "").trim().slice(0, 28),
      idade: String(data.player.idade || "").trim().slice(0, 3),
      telefone: String(data.player.telefone || "").replace(/\D/g, "").slice(0, 20)
    };
  } else {
    state.player = { nome: "", idade: "", telefone: "" };
  }

  state.money = Math.max(0, safeNumber(data.money, 0));
  state.clickValue = Math.max(1, safeNumber(data.clickValue, 10));
  state.monthRevenue = safeNumber(data.monthRevenue, 0);
  state.year = Math.max(1, safeInt(data.year, 1));
  state.month = clamp(safeInt(data.month, 1), 1, 12);
  state.secondsToMonth = clamp(safeInt(data.secondsToMonth, MONTH_SECONDS), 1, MONTH_SECONDS);
  state.yearlyRevenues = Array.isArray(data.yearlyRevenues)
    ? data.yearlyRevenues.map((v) => safeNumber(v, 0)).filter(Number.isFinite)
    : [];
  state.yearlyClickRevenue = Math.max(0, safeNumber(data.yearlyClickRevenue, 0));
  state.level = Math.max(1, safeInt(data.level, 1));
  state.xp = Math.max(0, safeInt(data.xp, 0));
  state.reputation = clamp(safeNumber(data.reputation, 50), 0, 100);
  state.prestigePoints = Math.max(0, safeInt(data.prestigePoints, 0));
  if (data.clickCombo && typeof data.clickCombo === "object") {
    state.clickCombo = {
      streak: Math.max(0, safeInt(data.clickCombo.streak, 0)),
      best: Math.max(0, safeInt(data.clickCombo.best, 0)),
      lastTs: Math.max(0, safeInt(data.clickCombo.lastTs, 0))
    };
  } else {
    state.clickCombo = { streak: 0, best: 0, lastTs: 0 };
  }

  if (data.farm && typeof data.farm === "object") {
    const investments = data.farm.investments && typeof data.farm.investments === "object" ? data.farm.investments : {};
    state.farm = {
      name: String(data.farm.name || "").trim().slice(0, 32),
      hectares: Math.max(0, safeInt(data.farm.hectares, 0)),
      investments: {},
      cattle: Array.isArray(data.farm.cattle)
        ? data.farm.cattle.map((c) => ({
          id: Math.max(1, safeInt(c?.id, 1)),
          cattleId: String(c?.cattleId || ""),
          nome: String(c?.nome || "Gado"),
          qty: Math.max(1, safeInt(c?.qty, 1)),
          buyPrice: Math.max(1, safeNumber(c?.buyPrice, 1)),
          sellPrice: Math.max(1, safeNumber(c?.sellPrice, 1))
        })).filter((c) => c.cattleId && c.qty > 0).slice(0, 200)
        : [],
      nextCattleId: Math.max(1, safeInt(data.farm.nextCattleId, 1))
    };
    farmInvestments.forEach((inv) => {
      state.farm.investments[inv.id] = Math.max(0, safeInt(investments[inv.id], 0));
    });
  } else {
    state.farm = { name: "", hectares: 0, investments: {}, cattle: [], nextCattleId: 1 };
    farmInvestments.forEach((inv) => {
      state.farm.investments[inv.id] = 0;
    });
  }
  const maxCattleId = state.farm.cattle.reduce((max, c) => Math.max(max, c.id), 0);
  state.farm.nextCattleId = Math.max(maxCattleId + 1, state.farm.nextCattleId || 1);

  if (data.realEstate && typeof data.realEstate === "object") {
    const owned = data.realEstate.owned && typeof data.realEstate.owned === "object" ? data.realEstate.owned : {};
    const personal = data.realEstate.personalUse && typeof data.realEstate.personalUse === "object" ? data.realEstate.personalUse : {};
    state.realEstate = { owned: {}, personalUse: {} };
    realEstateCatalog.forEach((item) => {
      state.realEstate.owned[item.id] = Boolean(owned[item.id]);
      state.realEstate.personalUse[item.id] = item.tipo === "casa" ? Boolean(personal[item.id]) : false;
    });
  } else {
    state.realEstate = { owned: {}, personalUse: {} };
    realEstateCatalog.forEach((item) => {
      state.realEstate.owned[item.id] = false;
      state.realEstate.personalUse[item.id] = false;
    });
  }

  const savedStats = data.stats && typeof data.stats === "object" ? data.stats : {};
  state.stats = {
    totalClicks: Math.max(0, safeInt(savedStats.totalClicks, 0)),
    clickRevenue: Math.max(0, safeNumber(savedStats.clickRevenue, 0)),
    companyRevenue: Math.max(0, safeNumber(savedStats.companyRevenue, 0)),
    operationalCosts: Math.max(0, safeNumber(savedStats.operationalCosts, 0)),
    payrollPaid: Math.max(0, safeNumber(savedStats.payrollPaid, 0)),
    taxesPaid: Math.max(0, safeNumber(savedStats.taxesPaid, 0)),
    interestPaid: Math.max(0, safeNumber(savedStats.interestPaid, 0)),
    contractRevenue: Math.max(0, safeNumber(savedStats.contractRevenue, 0)),
    realEstateRevenue: Math.max(0, safeNumber(savedStats.realEstateRevenue, 0)),
    dailyRevenue: Math.max(0, safeNumber(savedStats.dailyRevenue, 0)),
    achievementRevenue: Math.max(0, safeNumber(savedStats.achievementRevenue, 0)),
    loanReceived: Math.max(0, safeNumber(savedStats.loanReceived, 0)),
    fxRevenue: Math.max(0, safeNumber(savedStats.fxRevenue, 0)),
    taxDebtInterestPaid: Math.max(0, safeNumber(savedStats.taxDebtInterestPaid, 0)),
    ipvaPaid: Math.max(0, safeNumber(savedStats.ipvaPaid, 0)),
    carSalesRevenue: Math.max(0, safeNumber(savedStats.carSalesRevenue, 0)),
    carsBroken: Math.max(0, safeInt(savedStats.carsBroken, 0)),
    travelSpendBrl: Math.max(0, safeNumber(savedStats.travelSpendBrl, 0)),
    totalFlightKm: Math.max(0, safeNumber(savedStats.totalFlightKm, 0)),
    totalFlightHours: Math.max(0, safeNumber(savedStats.totalFlightHours, 0)),
    aircraftTaxPaidUsd: Math.max(0, safeNumber(savedStats.aircraftTaxPaidUsd, 0)),
    aircraftHangarPaidUsd: Math.max(0, safeNumber(savedStats.aircraftHangarPaidUsd, 0)),
    aircraftCrewPaidUsd: Math.max(0, safeNumber(savedStats.aircraftCrewPaidUsd, 0)),
    aircraftDebtInterestPaidUsd: Math.max(0, safeNumber(savedStats.aircraftDebtInterestPaidUsd, 0)),
    researchSpent: Math.max(0, safeNumber(savedStats.researchSpent, 0)),
    spentUpgrades: Math.max(0, safeNumber(savedStats.spentUpgrades, 0)),
    spentCompanies: Math.max(0, safeNumber(savedStats.spentCompanies, 0)),
    peakMoney: Math.max(0, safeNumber(savedStats.peakMoney, 0))
  };

  state.logs = [];
  state.achievementsUnlocked = Array.isArray(data.achievementsUnlocked)
    ? data.achievementsUnlocked.filter((x) => typeof x === "string").slice(0, 200)
    : [];

  if (data.dailyMissions && typeof data.dailyMissions === "object") {
    state.dailyMissions = {
      dateKey: String(data.dailyMissions.dateKey || ""),
      list: Array.isArray(data.dailyMissions.list)
        ? data.dailyMissions.list
          .map((m) => ({
            id: String(m?.id || ""),
            title: String(m?.title || "Missao diaria"),
            desc: String(m?.desc || ""),
            metric: String(m?.metric || "totalClicks"),
            start: Math.max(0, safeNumber(m?.start, 0)),
            target: Math.max(1, safeInt(m?.target, 1)),
            rewardMoney: Math.max(0, safeNumber(m?.rewardMoney, 0)),
            rewardXp: Math.max(0, safeInt(m?.rewardXp, 0)),
            claimed: Boolean(m?.claimed)
          }))
          .filter((m) => ["totalClicks", "clickRevenue", "companyRevenue"].includes(m.metric) && m.id)
          .slice(0, 10)
        : []
    };
  } else {
    state.dailyMissions = { dateKey: "", list: [] };
  }

  if (data.research && typeof data.research === "object") {
    state.research = {
      automation: Math.max(0, safeInt(data.research.automation, 0)),
      hr: Math.max(0, safeInt(data.research.hr, 0)),
      branding: Math.max(0, safeInt(data.research.branding, 0))
    };
  } else {
    state.research = { automation: 0, hr: 0, branding: 0 };
  }

  if (data.contracts && typeof data.contracts === "object") {
    state.contracts = {
      lastOfferMonthStamp: Math.max(0, safeInt(data.contracts.lastOfferMonthStamp, 0)),
      offers: Array.isArray(data.contracts.offers)
        ? data.contracts.offers.map((c) => ({
          offerId: String(c?.offerId || ""),
          title: String(c?.title || "Contrato"),
          months: Math.max(1, safeInt(c?.months, 1)),
          baseReward: Math.max(0, safeNumber(c?.baseReward, 0)),
          repGain: Math.max(0, safeInt(c?.repGain, 0)),
          xp: Math.max(0, safeInt(c?.xp, 0))
        })).filter((c) => c.offerId).slice(0, 12)
        : [],
      active: Array.isArray(data.contracts.active)
        ? data.contracts.active.map((c) => ({
          id: String(c?.id || ""),
          title: String(c?.title || "Contrato"),
          monthsLeft: Math.max(0, safeInt(c?.monthsLeft, 0)),
          reward: Math.max(0, safeNumber(c?.reward, 0)),
          repGain: Math.max(0, safeInt(c?.repGain, 0)),
          xp: Math.max(0, safeInt(c?.xp, 0))
        })).filter((c) => c.id).slice(0, 4)
        : []
    };
  } else {
    state.contracts = { lastOfferMonthStamp: 0, offers: [], active: [] };
  }

  if (data.economy && typeof data.economy === "object") {
    state.economy = {
      inflation: clamp(safeNumber(data.economy.inflation, 0.04), 0.01, 0.14),
      interest: clamp(safeNumber(data.economy.interest, 0.09), 0.02, 0.22),
      confidence: clamp(safeNumber(data.economy.confidence, 1), 0.75, 1.35),
      sectorBoosts: typeof data.economy.sectorBoosts === "object" && data.economy.sectorBoosts
        ? data.economy.sectorBoosts
        : {}
    };
  } else {
    state.economy = { inflation: 0.04, interest: 0.09, confidence: 1, sectorBoosts: {} };
  }

  if (data.loan && typeof data.loan === "object") {
    state.loan = {
      principalRemaining: Math.max(0, safeNumber(data.loan.principalRemaining, 0)),
      installment: Math.max(0, safeNumber(data.loan.installment, 0)),
      monthsLeft: Math.max(0, safeInt(data.loan.monthsLeft, 0)),
      annualRate: clamp(safeNumber(data.loan.annualRate, 0), 0, 1),
      label: String(data.loan.label || "")
    };
  } else {
    state.loan = { principalRemaining: 0, installment: 0, monthsLeft: 0, annualRate: 0, label: "" };
  }

  if (data.tax && typeof data.tax === "object") {
    const pending = data.tax.pendingYearClose && typeof data.tax.pendingYearClose === "object"
      ? {
        closeYear: Math.max(1, safeInt(data.tax.pendingYearClose.closeYear, state.year)),
        totalYearRevenue: Math.max(0, safeNumber(data.tax.pendingYearClose.totalYearRevenue, 0)),
        avg: Math.max(0, safeNumber(data.tax.pendingYearClose.avg, 0)),
        rate: clamp(safeNumber(data.tax.pendingYearClose.rate, 0), 0, 1),
        yearlyTax: Math.max(0, safeNumber(data.tax.pendingYearClose.yearlyTax, 0)),
        yearlyIpva: Math.max(0, safeNumber(data.tax.pendingYearClose.yearlyIpva, 0)),
        previousDebt: Math.max(0, safeNumber(data.tax.pendingYearClose.previousDebt, 0)),
        debtInterest: Math.max(0, safeNumber(data.tax.pendingYearClose.debtInterest, 0)),
        debtDue: Math.max(0, safeNumber(data.tax.pendingYearClose.debtDue, 0)),
        totalDue: Math.max(0, safeNumber(data.tax.pendingYearClose.totalDue, 0))
      }
      : null;
    state.tax = {
      debt: Math.max(0, safeNumber(data.tax.debt, 0)),
      pendingYearClose: pending
    };
  } else {
    state.tax = { debt: 0, pendingYearClose: null };
  }

  if (data.participations && typeof data.participations === "object") {
    state.participations = {
      holdings: data.participations.holdings && typeof data.participations.holdings === "object" ? data.participations.holdings : {},
      market: data.participations.market && typeof data.participations.market === "object" ? data.participations.market : {}
    };
  } else {
    state.participations = { holdings: {}, market: {} };
  }
  initParticipationMarket();

  if (data.worldWealth && typeof data.worldWealth === "object") {
    state.worldWealth = {};
    worldBillionaires.forEach((p) => {
      state.worldWealth[p.id] = Math.max(1, safeNumber(data.worldWealth[p.id], p.usdBillion));
    });
  } else {
    state.worldWealth = {};
  }
  ensureWorldWealthInitialized();

  if (data.aviation && typeof data.aviation === "object") {
    state.aviation = {
      fleet: Array.isArray(data.aviation.fleet)
        ? data.aviation.fleet.map((a) => ({
          id: Math.max(1, safeInt(a?.id, 1)),
          modelId: String(a?.modelId || ""),
          nome: String(a?.nome || "Aviao"),
          originalPriceUsd: Math.max(100000, safeNumber(a?.originalPriceUsd, 100000)),
          currentValueUsd: Math.max(0, safeNumber(a?.currentValueUsd, 0)),
          cruiseKmh: Math.max(500, safeNumber(a?.cruiseKmh, 800)),
          opCostUsdPerHour: Math.max(500, safeNumber(a?.opCostUsdPerHour, 3000)),
          flightHours: Math.max(0, safeNumber(a?.flightHours, 0)),
          totalKm: Math.max(0, safeNumber(a?.totalKm, 0)),
          monthsOwned: Math.max(0, safeInt(a?.monthsOwned, 0))
        })).filter((a) => a.modelId && a.currentValueUsd > 0).slice(0, 30)
        : [],
      nextAircraftId: Math.max(1, safeInt(data.aviation.nextAircraftId, 1)),
      accruedUsd: Math.max(0, safeNumber(data.aviation.accruedUsd, 0)),
      debtUsd: Math.max(0, safeNumber(data.aviation.debtUsd, 0)),
      selectedAircraftId: Math.max(0, safeInt(data.aviation.selectedAircraftId, 0))
    };
  } else {
    state.aviation = { fleet: [], nextAircraftId: 1, accruedUsd: 0, debtUsd: 0, selectedAircraftId: 0 };
  }
  const maxAircraftId = state.aviation.fleet.reduce((max, a) => Math.max(max, a.id), 0);
  state.aviation.nextAircraftId = Math.max(maxAircraftId + 1, state.aviation.nextAircraftId);
  if (!state.aviation.fleet.find((a) => a.id === state.aviation.selectedAircraftId)) {
    state.aviation.selectedAircraftId = state.aviation.fleet.length ? state.aviation.fleet[0].id : 0;
  }

  if (data.passport && typeof data.passport === "object") {
    const countries = typeof data.passport.countries === "object" && data.passport.countries ? data.passport.countries : {};
    state.passport = {
      countries: {},
      totalTrips: Math.max(0, safeInt(data.passport.totalTrips, 0))
    };
    Object.keys(countries).forEach((k) => {
      const c = countries[k] || {};
      state.passport.countries[k] = {
        name: String(c.name || k),
        visits: Math.max(0, safeInt(c.visits, 0)),
        firstYear: Math.max(1, safeInt(c.firstYear, 1)),
        firstMonth: clamp(safeInt(c.firstMonth, 1), 1, 12)
      };
    });
  } else {
    state.passport = { countries: {}, totalTrips: 0 };
  }

  if (data.saf && typeof data.saf === "object") {
    const saved = data.saf;
    const base = defaultSafState();
    state.saf = {
      ...base,
      owned: Boolean(saved.owned),
      profileId: String(saved.profileId || ""),
      clubName: String(saved.clubName || ""),
      league: String(saved.league || ""),
      region: String(saved.region || ""),
      purchasePrice: Math.max(0, safeNumber(saved.purchasePrice, 0)),
      debt: Math.max(0, safeNumber(saved.debt, 0)),
      reputation: clamp(safeNumber(saved.reputation, 35), 0, 100),
      fanMood: clamp(safeNumber(saved.fanMood, 60), 0, 100),
      pressure: clamp(safeNumber(saved.pressure, 50), 0, 100),
      valuation: Math.max(0, safeNumber(saved.valuation, 0)),
      safSoldPct: clamp(safeNumber(saved.safSoldPct, 0), 0, 90),
      sponsorsLevel: Math.max(0, safeInt(saved.sponsorsLevel, 0)),
      tvLevel: Math.max(0, safeInt(saved.tvLevel, 0)),
      structures: {
        ct: Math.max(0, safeInt(saved.structures?.ct, 0)),
        base: Math.max(0, safeInt(saved.structures?.base, 0)),
        estadio: Math.max(0, safeInt(saved.structures?.estadio, 0)),
        medico: Math.max(0, safeInt(saved.structures?.medico, 0)),
        scout: Math.max(0, safeInt(saved.structures?.scout, 0))
      },
      europeBranch: Boolean(saved.europeBranch),
      networkClubs: clamp(safeInt(saved.networkClubs, 0), 0, 2),
      roster: Array.isArray(saved.roster) ? saved.roster.map((p) => ({
        id: String(p?.id || ""),
        age: clamp(safeInt(p?.age, 18), 14, 45),
        potential: clamp(safeInt(p?.potential, 70), 50, 99),
        mediaScore: clamp(safeInt(p?.mediaScore, 0), 0, 100),
        value: Math.max(0, safeNumber(p?.value, 0)),
        developed: Boolean(p?.developed)
      })).filter((p) => p.id).slice(0, 120) : [],
      youthPool: Array.isArray(saved.youthPool) ? saved.youthPool.map((p) => ({
        id: String(p?.id || ""),
        age: clamp(safeInt(p?.age, 16), 14, 21),
        potential: clamp(safeInt(p?.potential, 72), 50, 99),
        mediaScore: clamp(safeInt(p?.mediaScore, 0), 0, 100),
        value: Math.max(0, safeNumber(p?.value, 0)),
        developed: Boolean(p?.developed)
      })).filter((p) => p.id).slice(0, 20) : [],
      investors: {
        arab: Boolean(saved.investors?.arab),
        us: Boolean(saved.investors?.us),
        ipo: Boolean(saved.investors?.ipo)
      },
      titles: Math.max(0, safeInt(saved.titles, 0)),
      libertadores: Math.max(0, safeInt(saved.libertadores, 0)),
      champions: Math.max(0, safeInt(saved.champions, 0)),
      trophies: {
        brasileirao: Math.max(0, safeInt(saved.trophies?.brasileirao, 0)),
        copaDoBrasil: Math.max(0, safeInt(saved.trophies?.copaDoBrasil, 0)),
        libertadores: Math.max(0, safeInt(saved.trophies?.libertadores, 0)),
        champions: Math.max(0, safeInt(saved.trophies?.champions, 0))
      },
      trophyHistory: Array.isArray(saved.trophyHistory)
        ? saved.trophyHistory.map((t) => ({
          year: Math.max(1, safeInt(t?.year, 1)),
          name: String(t?.name || "").trim().slice(0, 48)
        })).filter((t) => t.name).slice(0, 24)
        : [],
      competitions: (() => {
        const baseComp = createSafCompetitions();
        const src = saved.competitions && typeof saved.competitions === "object" ? saved.competitions : {};
        const srcLeague = src.league && typeof src.league === "object" ? src.league : {};
        const srcCopa = src.copa && typeof src.copa === "object" ? src.copa : {};
        const srcLib = src.libertadores && typeof src.libertadores === "object" ? src.libertadores : {};
        return {
          seasonYear: Math.max(1, safeInt(src.seasonYear, state.year)),
          lastActionMonthStamp: String(src.lastActionMonthStamp || ""),
          league: {
            tier: String(srcLeague.tier || baseComp.league.tier || "A"),
            name: String(srcLeague.name || baseComp.league.name),
            roundsTotal: Math.max(10, safeInt(srcLeague.roundsTotal, baseComp.league.roundsTotal)),
            roundsPlayed: Math.max(0, safeInt(srcLeague.roundsPlayed, 0)),
            points: Math.max(0, safeInt(srcLeague.points, 0)),
            wins: Math.max(0, safeInt(srcLeague.wins, 0)),
            draws: Math.max(0, safeInt(srcLeague.draws, 0)),
            losses: Math.max(0, safeInt(srcLeague.losses, 0)),
            goalsFor: Math.max(0, safeInt(srcLeague.goalsFor, 0)),
            goalsAgainst: Math.max(0, safeInt(srcLeague.goalsAgainst, 0)),
            position: clamp(safeInt(srcLeague.position, 20), 1, 20),
            finished: Boolean(srcLeague.finished)
          },
          copa: {
            phase: Math.max(0, safeInt(srcCopa.phase, 0)),
            phases: Array.isArray(srcCopa.phases) && srcCopa.phases.length ? srcCopa.phases.slice(0, 8).map((x) => String(x || "")) : baseComp.copa.phases,
            alive: Boolean(srcCopa.alive ?? true),
            finished: Boolean(srcCopa.finished)
          },
          libertadores: {
            qualified: Boolean(srcLib.qualified),
            phase: Math.max(0, safeInt(srcLib.phase, 0)),
            phases: Array.isArray(srcLib.phases) && srcLib.phases.length ? srcLib.phases.slice(0, 8).map((x) => String(x || "")) : baseComp.libertadores.phases,
            alive: Boolean(srcLib.alive ?? true),
            finished: Boolean(srcLib.finished)
          }
        };
      })(),
      lastMonthly: {
        revenue: Math.max(0, safeNumber(saved.lastMonthly?.revenue, 0)),
        costs: Math.max(0, safeNumber(saved.lastMonthly?.costs, 0)),
        net: safeNumber(saved.lastMonthly?.net, 0)
      },
      eventFeed: Array.isArray(saved.eventFeed) ? saved.eventFeed.filter((x) => typeof x === "string").slice(0, 40) : []
    };
  } else {
    state.saf = defaultSafState();
  }

  if (Array.isArray(data.garage)) {
    state.garage = data.garage
      .map((car) => ({
        id: Math.max(1, safeInt(car?.id, 1)),
        modelId: String(car?.modelId || ""),
        nome: String(car?.nome || "Carro"),
        originalPrice: Math.max(1000, safeNumber(car?.originalPrice, 1000)),
        currentValue: Math.max(0, safeNumber(car?.currentValue, 0)),
        km: Math.max(0, safeNumber(car?.km, 0)),
        monthsOwned: Math.max(0, safeInt(car?.monthsOwned, 0))
      }))
      .filter((car) => car.modelId && car.currentValue > 0)
      .slice(0, 80);
  } else {
    state.garage = [];
  }
  const maxGarageId = state.garage.reduce((max, car) => Math.max(max, car.id), 0);
  state.nextCarId = Math.max(maxGarageId + 1, safeInt(data.nextCarId, state.garage.length + 1));

  if (data.forex && typeof data.forex === "object") {
    const usd = data.forex.usd && typeof data.forex.usd === "object" ? data.forex.usd : {};
    const eur = data.forex.eur && typeof data.forex.eur === "object" ? data.forex.eur : {};
    state.forex = {
      usd: {
        balance: Math.max(0, safeNumber(usd.balance, 0)),
        rate: clamp(safeNumber(usd.rate, 5.45), 4.9, 7.1),
        min: 4.9,
        max: 7.1
      },
      eur: {
        balance: Math.max(0, safeNumber(eur.balance, 0)),
        rate: clamp(safeNumber(eur.rate, 7.15), 6.7, 7.8),
        min: 6.7,
        max: 7.8
      }
    };
  } else {
    state.forex = {
      usd: { balance: 0, rate: 5.45, min: 4.9, max: 7.1 },
      eur: { balance: 0, rate: 7.15, min: 6.7, max: 7.8 }
    };
  }

  if (data.crypto && typeof data.crypto === "object") {
    const base = defaultCryptoState();
    state.crypto = {
      selectedCoinId: cryptoCoinById(String(data.crypto.selectedCoinId || "BTC")).id,
      coins: { ...base.coins },
      market: { ...base.market },
      spaces: {},
      gpus: {}
    };
    cryptoCoinsCatalog.forEach((coin) => {
      state.crypto.coins[coin.id] = Math.max(0, safeNumber(data.crypto.coins?.[coin.id], 0));
      state.crypto.market[coin.id] = clamp(safeNumber(data.crypto.market?.[coin.id], coin.priceUsd), coin.min, coin.max);
    });
    cryptoMiningSpacesCatalog.forEach((space) => {
      state.crypto.spaces[space.id] = Math.max(0, safeInt(data.crypto.spaces?.[space.id], 0));
    });
    cryptoGpuCatalog.forEach((gpu) => {
      state.crypto.gpus[gpu.id] = Math.max(0, safeInt(data.crypto.gpus?.[gpu.id], 0));
    });
  } else {
    state.crypto = defaultCryptoState();
  }

  if (data.franchise && typeof data.franchise === "object") {
    const saved = data.franchise;
    const active = saved.active && typeof saved.active === "object" ? saved.active : null;
    state.franchise = {
      bankBalance: Math.max(0, safeNumber(saved.bankBalance, 0)),
      active: active
        ? {
          name: String(active.name || "").trim().slice(0, 36),
          segmentId: franchiseSegmentById(String(active.segmentId || "")).id,
          createdYear: Math.max(1, safeInt(active.createdYear, state.year)),
          createdMonth: clamp(safeInt(active.createdMonth, state.month), 1, 12),
          setupCost: Math.max(0, safeNumber(active.setupCost, 0)),
          soldUnits: Math.max(0, safeInt(active.soldUnits, 0)),
          totalFranchiseFees: Math.max(0, safeNumber(active.totalFranchiseFees, 0)),
          totalRoyalties: Math.max(0, safeNumber(active.totalRoyalties, 0)),
          valuation: Math.max(0, safeNumber(active.valuation, 0)),
          lastMonthSales: Math.max(0, safeInt(active.lastMonthSales, 0)),
          lastMonthFranchiseFees: Math.max(0, safeNumber(active.lastMonthFranchiseFees, 0)),
          lastMonthRoyalties: Math.max(0, safeNumber(active.lastMonthRoyalties, 0)),
          lastMonthNet: Math.max(0, safeNumber(active.lastMonthNet, 0))
        }
        : null,
      history: Array.isArray(saved.history)
        ? saved.history.map((h) => ({
          name: String(h?.name || "").trim().slice(0, 36),
          segmentId: franchiseSegmentById(String(h?.segmentId || "")).id,
          segmentName: String(h?.segmentName || "").trim().slice(0, 40),
          soldUnits: Math.max(0, safeInt(h?.soldUnits, 0)),
          soldAtYear: Math.max(1, safeInt(h?.soldAtYear, 1)),
          soldAtMonth: clamp(safeInt(h?.soldAtMonth, 1), 1, 12),
          saleValue: Math.max(0, safeNumber(h?.saleValue, 0))
        })).slice(0, 8)
        : []
    };
    if (state.franchise.active && !state.franchise.active.name) state.franchise.active = null;
  } else {
    state.franchise = defaultFranchiseState();
  }

  if (data.savings && typeof data.savings === "object") {
    state.savings = {
      balance: Math.max(0, safeNumber(data.savings.balance, 0)),
      monthlyRate: clamp(safeNumber(data.savings.monthlyRate, 0.01), 0, 0.05),
      lastYield: Math.max(0, safeNumber(data.savings.lastYield, 0)),
      totalYield: Math.max(0, safeNumber(data.savings.totalYield, 0))
    };
  } else {
    state.savings = { balance: 0, monthlyRate: 0.01, lastYield: 0, totalYield: 0 };
  }

  const savedUpgrades = Array.isArray(data.upgrades) ? data.upgrades : [];
  const upMap = new Map(savedUpgrades.map((x) => [x.id, safeInt(x.level, 0)]));
  upgrades.forEach((u) => {
    u.level = Math.max(0, safeInt(upMap.get(u.id), 0));
  });

  const savedCompanies = Array.isArray(data.companies) ? data.companies : [];
  const coMap = new Map(
    savedCompanies.map((x) => [
      x.id,
      {
        owned: Math.max(0, safeInt(x.owned, 0)),
        level: Math.max(0, safeInt(x.level, 0)),
        employees: Math.max(0, safeInt(x.employees, 0)),
        salaryTier: safeInt(x.salaryTier, 1),
        marketFactor: clamp(safeNumber(x.marketFactor, 1), 0.65, 3.8),
        lastIncome: Math.max(0, safeNumber(x.lastIncome, 0))
      }
    ])
  );
  companies.forEach((c) => {
    const saved = coMap.get(c.id) || { owned: 0, level: 0, employees: 0, salaryTier: 1, marketFactor: 1, lastIncome: 0 };
    c.owned = saved.owned;
    c.level = saved.level;
    c.employees = Math.max(0, saved.employees);
    c.salaryTier = Math.round(clamp(saved.salaryTier, 0, COMPANY_MARGIN_OPTIONS.length - 1));
    c.marketFactor = clamp(safeNumber(saved.marketFactor, 1), 0.65, 3.8);
    c.lastIncome = Math.max(0, safeNumber(saved.lastIncome, 0));
  });

  el.nameInput.value = state.player.nome || "";
  el.ageInput.value = state.player.idade || "";
  el.phoneInput.value = state.player.telefone || "";
}

function localKey(phone) {
  return `imperio_clicker_save_${String(phone).replace(/\D/g, "")}`;
}

function saveDeviceProgress() {
  try {
    localStorage.setItem(DEVICE_AUTOSAVE_KEY, JSON.stringify(serializeState()));
  } catch {
    // ignore storage errors
  }
}

function loadDeviceProgress() {
  try {
    const raw = localStorage.getItem(DEVICE_AUTOSAVE_KEY);
    if (!raw) return false;
    applySave(JSON.parse(raw));
    return true;
  } catch {
    return false;
  }
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

el.clickBtn.addEventListener("click", () => {
  ensureAudio();
  updateClickCombo();
  const gain = effectiveClickValue();
  state.money += gain;
  state.monthRevenue += gain;
  state.stats.totalClicks += 1;
  state.stats.clickRevenue += gain;
  state.yearlyClickRevenue += gain;
  state.stats.peakMoney = Math.max(state.stats.peakMoney, state.money);
  addXp(1 + state.prestigePoints);
  animateClickFx(gain);
  sfxClick();
  render();
});
el.skipMonthBtn.addEventListener("click", () => {
  if (hasPendingTaxDecision()) {
    setStatus("Resolva a decisao de imposto anual antes de pular mes.", "warn");
    render();
    return;
  }
  processMonth();
  setStatus("Mes pulado manualmente.", "ok");
});

el.saveProfileBtn.addEventListener("click", () => {
  const nome = el.nameInput.value.trim();
  const idade = Number(el.ageInput.value);
  const telefone = el.phoneInput.value.replace(/\s+/g, "").trim();

  if (!nome || !idade || idade < 8 || idade > 120) {
    setStatus("Preencha nome e idade valida.", "bad");
    return;
  }

  state.player = { nome, idade, telefone };
  setStatus("Personagem salvo.", "ok");
  render();
});

if (el.farmNameBtn) {
  el.farmNameBtn.addEventListener("click", () => {
    const name = String(el.farmNameInput?.value || "").trim();
    if (!name) {
      setStatus("Informe um nome para a fazenda.", "warn");
      return;
    }
    state.farm.name = name.slice(0, 32);
    if (el.farmNameInput) el.farmNameInput.value = "";
    setStatus("Nome da fazenda atualizado.", "ok");
    render();
  });
}

if (el.farmBuyHectaresBtn) {
  el.farmBuyHectaresBtn.addEventListener("click", () => buyHectares());
}
if (el.franchiseSegmentSelect) {
  el.franchiseSegmentSelect.addEventListener("change", () => {
    updateFranchiseSegmentInfo();
    renderFranchise();
  });
}
if (el.franchiseCreateBtn) el.franchiseCreateBtn.addEventListener("click", createFranchise);
if (el.franchiseTransferBtn) el.franchiseTransferBtn.addEventListener("click", transferFranchiseBalance);
if (el.franchiseSellBtn) el.franchiseSellBtn.addEventListener("click", sellCurrentFranchise);

el.saveLocalBtn.addEventListener("click", () => {
  const phone = (state.player.telefone || el.phoneInput.value || "").replace(/\D/g, "");
  if (!phone) {
    setStatus("Informe telefone para salvar local.", "bad");
    return;
  }
  state.player.telefone = phone;
  localStorage.setItem(localKey(phone), JSON.stringify(serializeState()));
  upsertRankingEntry();
  setStatus(`Jogo salvo no telefone ${phone}.`, "ok");
  render();
});

el.loadLocalBtn.addEventListener("click", () => {
  const phone = (el.phoneInput.value || state.player.telefone || "").replace(/\D/g, "");
  if (!phone) {
    setStatus("Informe telefone para recuperar.", "bad");
    return;
  }
  const raw = localStorage.getItem(localKey(phone));
  if (!raw) {
    setStatus("Nenhum save local encontrado para esse telefone.", "warn");
    return;
  }
  try {
    applySave(JSON.parse(raw));
    upsertRankingEntry();
    setStatus("Save local carregado.", "ok");
    logEvent("Save local recuperado por telefone.");
    render();
  } catch {
    setStatus("Falha ao carregar save local.", "bad");
  }
});

el.exportBtn.addEventListener("click", async () => {
  const phone = (state.player.telefone || el.phoneInput.value || "").replace(/\D/g, "");
  if (!phone) {
    setStatus("Vincule um telefone antes de exportar.", "bad");
    return;
  }
  state.player.telefone = phone;
  const code = toBase64Utf8(JSON.stringify(serializeState()));
  el.backupCode.value = code;
  try {
    await navigator.clipboard.writeText(code);
    setStatus("Codigo de backup gerado e copiado.", "ok");
  } catch {
    setStatus("Codigo gerado. Copie manualmente.", "warn");
  }
  render();
});

el.importBtn.addEventListener("click", () => {
  const code = el.backupCode.value.trim();
  if (!code) {
    setStatus("Cole um codigo valido para importar.", "bad");
    return;
  }
  try {
    const json = fromBase64Utf8(code);
    const data = JSON.parse(json);
    applySave(data);
    upsertRankingEntry();
    setStatus("Backup importado com sucesso.", "ok");
    logEvent("Backup importado em outro dispositivo.", "ok");
    render();
  } catch {
    setStatus("Codigo invalido ou corrompido.", "bad");
  }
});

el.refreshRankingBtn.addEventListener("click", () => {
  renderRanking();
  setStatus("Ranking atualizado.", "ok");
});

el.resetCharacterBtn.addEventListener("click", resetCharacter);
el.travelAircraftSelect.addEventListener("change", () => {
  state.aviation.selectedAircraftId = safeInt(el.travelAircraftSelect.value, 0);
  render();
});

el.refreshContractsBtn.addEventListener("click", () => {
  generateContractOffers();
  setStatus("Ofertas de contratos atualizadas.", "ok");
  render();
});

el.loanSmallBtn.addEventListener("click", () => requestLoan(25000, 12, 0.14, "Emprestimo pequeno"));
el.loanMediumBtn.addEventListener("click", () => requestLoan(90000, 18, 0.18, "Emprestimo medio"));
el.loanLargeBtn.addEventListener("click", () => requestLoan(260000, 24, 0.22, "Emprestimo grande"));
if (el.savingsDepositBtn) el.savingsDepositBtn.addEventListener("click", depositSavings);
if (el.savingsWithdrawBtn) el.savingsWithdrawBtn.addEventListener("click", withdrawSavings);
el.usdBuyBtn.addEventListener("click", () => buyForex("USD"));
el.usdSellAllBtn.addEventListener("click", () => sellAllForex("USD"));
el.eurBuyBtn.addEventListener("click", () => buyForex("EUR"));
el.eurSellAllBtn.addEventListener("click", () => sellAllForex("EUR"));
if (el.cryptoCoinSelect) {
  el.cryptoCoinSelect.addEventListener("change", () => {
    state.crypto.selectedCoinId = cryptoCoinById(el.cryptoCoinSelect.value).id;
    render();
  });
}
if (el.cryptoSellAllBtn) {
  el.cryptoSellAllBtn.addEventListener("click", convertAllCryptoToUsd);
}
el.researchAutomationBtn.addEventListener("click", () => investResearch("automation"));
el.researchHrBtn.addEventListener("click", () => investResearch("hr"));
el.researchBrandingBtn.addEventListener("click", () => investResearch("branding"));

el.prestigeBtn.addEventListener("click", doPrestige);
el.taxPayNowBtn.addEventListener("click", () => {
  if (!hasPendingTaxDecision()) return;
  closeYear(true);
  setStatus("Imposto anual pago.", "ok");
  render();
});
el.taxPayLaterBtn.addEventListener("click", () => {
  if (!hasPendingTaxDecision()) return;
  closeYear(false);
  setStatus("Imposto anual adiado para o proximo mes.", "warn");
  render();
});

if (el.adminLoginBtn) el.adminLoginBtn.addEventListener("click", adminLogin);
if (el.adminLogoutBtn) el.adminLogoutBtn.addEventListener("click", adminLogout);
if (el.adminAddMoneyBtn) el.adminAddMoneyBtn.addEventListener("click", adminAddMoney);
if (el.adminRemoveMoneyBtn) el.adminRemoveMoneyBtn.addEventListener("click", adminRemoveMoney);
if (el.adminSetMoneyBtn) el.adminSetMoneyBtn.addEventListener("click", adminSetMoney);
if (el.adminAddClickBtn) el.adminAddClickBtn.addEventListener("click", adminAddClickBase);
if (el.adminAddPrestigeBtn) el.adminAddPrestigeBtn.addEventListener("click", adminAddPrestige);
if (el.adminAdvanceMonthBtn) el.adminAdvanceMonthBtn.addEventListener("click", adminAdvanceMonths);
if (el.adminBoostBtn) el.adminBoostBtn.addEventListener("click", adminBoostEconomy);
if (el.adminUnlockBtn) el.adminUnlockBtn.addEventListener("click", adminUnlockEverything);
if (el.adminClearDebtsBtn) el.adminClearDebtsBtn.addEventListener("click", adminClearDebts);
if (el.adminPasswordInput) {
  el.adminPasswordInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") adminLogin();
  });
}

setInterval(() => {
  if (hasPendingTaxDecision()) {
    render();
    return;
  }
  mineCryptoSecond();
  state.secondsToMonth -= 1;
  if (state.secondsToMonth <= 0) {
    processMonth();
  }
  render();
}, 1000);

setInterval(() => {
  saveDeviceProgress();
}, 3000);

window.addEventListener("beforeunload", saveDeviceProgress);
window.addEventListener("pagehide", saveDeviceProgress);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveDeviceProgress();
});

document.addEventListener("dblclick", (e) => e.preventDefault(), { passive: false });
document.addEventListener("gesturestart", (e) => e.preventDefault(), { passive: false });
document.body.addEventListener("pointerdown", ensureAudio, { once: true });

const loadedDeviceSave = loadDeviceProgress();
ensureDailyMissionsFresh();
ensureWorldWealthInitialized();
initParticipationMarket();
if (loadedDeviceSave) {
  logEvent("Progresso local do dispositivo carregado automaticamente.", "ok");
} else {
  logEvent("Jogo iniciado. Clique para ganhar dinheiro.", "ok");
}
render();



