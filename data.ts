
import { Topic } from './types';

export const topics: Topic[] = [
  {
    id: 1,
    title: "Market Economy Foundations",
    summary: "Rules, Concepts, Functions, and Subjects of the Market",
    learningObjectives: {
      knowledge: "Understand the fundamental laws of the market economy, classification of types, and evolution of trading enterprises.",
      skills: "Ability to identify market subjects, analyze development stages, and compare domestic systems with foreign experiences.",
      competencies: "Capability to evaluate the effectiveness of state regulation and apply international best practices."
    },
    lessonPlan: [
      "1.1. Types and subjects of the market",
      "1.2. Essence, functions, and stages of development of trade enterprises",
      "1.3. Social forms of trade and economic classification",
      "1.4. Experiences of foreign countries in trade regulation"
    ],
    theoreticalContent: [
      {
        section: "3.1. Market Economy Concept",
        content: "The market economy is an economic system based on private property, freedom of choice, and competition. It is driven by the interaction of supply and demand. Main subjects include Households (consumers), Business Enterprises (producers), and the State (regulator)."
      },
      {
        section: "3.2. Essence of Trade Enterprises",
        content: "A trade enterprise is an independent economic entity that performs the purchase and sale of goods to satisfy consumer demand and obtain profit. Key functions: Economic (movement of goods), Social (job creation), and Information (trend identifying)."
      }
    ],
    practicalTasks: [
      {
        id: "t1-1",
        title: "Subject Mapping",
        objective: "Develop analytical skills in identifying and comparing market types.",
        instructions: ["Select one specific market (e.g., smartphone, coffee shop)", "Analyze type by object, scope, and competition", "Prepare a 5-minute presentation"],
        deliverable: "Diagram showing flow of money and goods."
      }
    ],
    caseStudies: [
      {
        id: "cs1-1",
        title: "The Bazaar Evolution",
        situation: "A traditional bazaar in Samarkand is being converted into a modern shopping mall.",
        questions: ["How does this reflect stages of development?", "What are the social impacts?", "How should heritage be preserved?"]
      }
    ],
    discussionQuestions: [
      "How does a market economy differ from a centrally planned one?",
      "Who is more important: the producer or the consumer?",
      "Are traditional bazaars still relevant in the era of modern retail?"
    ],
    independentWork: [
      "Comparative Analysis of Market Economy Models (USA vs Germany)",
      "Historical Evolution of Trade in Uzbekistan",
      "The role of the 'Invisible Hand' in the 21st century"
    ],
    problemSituations: [
      {
        id: "ps1-1",
        situation: "A market has many sellers but only one buyer (Monopsony).",
        problem: "Predict the impact on raw material prices.",
        questions: ["How can sellers react?", "What regulatory intervention is needed?"]
      }
    ]
  },
  {
    id: 2,
    title: "Trading Enterprises in Consumer Goods Market",
    summary: "Market Environment, Goals, and Classification",
    learningObjectives: {
      knowledge: "Define consumer goods market and enterprise placement within legal and economic frameworks.",
      skills: "Ability to align goals with environment dynamics and categorize models.",
      competencies: "Manage specific risks like dual nature and turnover speed."
    },
    lessonPlan: [
      "2.1. Market environment of commercial enterprises",
      "2.2. Concept of an enterprise and distinctive features",
      "2.3. Goals of commercial enterprises",
      "2.4. Specific aspects and classification"
    ],
    theoreticalContent: [
      {
        section: "3.1. Market Environment",
        content: "Comprises micro (customers, competitors) and macro (PEST factors) environments. Internal environment includes human resources, technology, and culture."
      }
    ],
    practicalTasks: [
      {
        id: "t2-1",
        title: "PESTEL Analysis",
        objective: "Analyze impact of macro factors on a specific enterprise.",
        instructions: ["Identify 3-5 elements per PESTEL category", "Rate impact (High/Medium/Low)", "Propose strategies"],
        deliverable: "PESTEL Matrix Presentation."
      }
    ],
    caseStudies: [
      {
        id: "cs2-1",
        title: "SmartMart Positioning Dilemma",
        situation: "SmartMart faces competition from international discounters and high-end luxury retailers simultaneously.",
        questions: ["What goals should they prioritize?", "Should they move upmarket or downmarket?"]
      }
    ],
    discussionQuestions: ["Is the internal or external environment more important?", "Can an enterprise be truly independent if it has one supplier?"],
    independentWork: ["Impact of Uzbekistan Strategy 2030", "Corporate culture as a competitive advantage"],
    problemSituations: [
      {
        id: "ps2-1",
        situation: "Owner uses business bank account for personal shopping.",
        problem: "Violation of distinctive features of a legal entity.",
        questions: ["What are the risks?", "How to enforce separation?"]
      }
    ]
  },
  {
    id: 3,
    title: "Trade Turnover of Trading Enterprises",
    summary: "Retail, Wholesale, Catering, and Analytical Methods",
    learningObjectives: {
      knowledge: "Understand economic essence of turnover as transformation of commodity value.",
      skills: "Calculate nominal/real turnover and perform horizontal/vertical analysis.",
      competencies: "Evaluate effectiveness of sales channels and provide forecasts."
    },
    lessonPlan: ["3.1 Concept and essence", "3.2 Retail turnover", "3.3 Wholesale mechanics", "3.4 Catering specifics", "3.5 Analysis and forecasting"],
    theoreticalContent: [
      {
        section: "3.1. Economic Essence",
        content: "Turnover is the total volume of sales in monetary terms. Nominal turnover uses current prices, Real turnover adjusts for inflation."
      }
    ],
    practicalTasks: [
      {
        id: "t3-1",
        title: "ABC Analysis Exercise",
        objective: "Apply ABC analysis to product assortment.",
        instructions: ["Rank 50 products by turnover", "Classify into A (80%), B (15%), C (5%) groups", "Propose management strategies"],
        deliverable: "ABC Classification Table."
      }
    ],
    caseStudies: [
      {
        id: "cs3-1",
        title: "The Declining Turnover Mystery",
        situation: "Stable traffic but 22% drop in transaction value.",
        questions: ["How to analyze by category?", "What strategies can reverse this?"]
      }
    ],
    discussionQuestions: ["Why is turnover the 'bloodline' of an enterprise?", "Is high turnover always better than high margin?"],
    independentWork: ["Impact of E-commerce (Uzum, Zoodmall) on structure", "Big Data and AI in predictive analysis"],
    problemSituations: [
      {
        id: "ps3-1",
        situation: "Turnover is rising but bank account is empty due to high receivables.",
        problem: "Cash flow gap management.",
        questions: ["How to fix the collection process?", "Is the growth healthy?"]
      }
    ]
  },
  {
    id: 4,
    title: "Commodity Supply of Trading Enterprises",
    summary: "Resources, Reserves, and Optimal Levels",
    learningObjectives: {
      knowledge: "Understand composition of commodity resources and economic nature of reserves.",
      skills: "Calculate optimal levels and identify sources of supply.",
      competencies: "Design inventory systems balancing cost of stock vs risk of shortage."
    },
    lessonPlan: ["4.1 Commodity resources", "4.2 Reserves as main element", "4.3 Determining amounts", "4.4 Role in assortment"],
    theoreticalContent: [
      {
        section: "3.1. Sources of Supply",
        content: "Includes producers, wholesalers, imports, and local craftsmen. Planning formula: Resources = Planned Sales + Target Ending Inventory - Beginning Inventory."
      }
    ],
    practicalTasks: [
      {
        id: "t4-1",
        title: "EOQ Model Application",
        objective: "Minimize total inventory costs.",
        instructions: ["Calculate Economic Order Quantity", "Determine reorder point", "Perform sensitivity analysis"],
        deliverable: "EOQ Analysis Report."
      }
    ],
    caseStudies: [
      {
        id: "cs4-1",
        title: "The Overstocking Crisis",
        situation: "Inventory levels increased 150% while sales only grew 40%.",
        questions: ["What are the hidden costs?", "How to reform purchasing policies?"]
      }
    ],
    discussionQuestions: ["Why is inventory a 'Necessary Evil'?", "Should safety stock be the same for all items?"],
    independentWork: ["Vendor Managed Inventory (VMI) impact", "Cold Chain logistics in pharmaceuticals"],
    problemSituations: [
      {
        id: "ps4-1",
        situation: "Product trending on TikTok causes 500% demand spike.",
        problem: "Crisis management of Safety Stock.",
        questions: ["How to respond immediately?", "How to adjust future safety stock?"]
      }
    ]
  },
  {
    id: 5,
    title: "Labor and Labor Resources in Trading Enterprises",
    summary: "Specifics, Regulation, and Analysis",
    learningObjectives: {
      knowledge: "Understand the unique nature of labor in trade and legal frameworks.",
      skills: "Calculate productivity, evaluate turnover, and analyze structure.",
      competencies: "Design effective HRM strategies for commercial efficiency."
    },
    lessonPlan: ["5.1 Labor features", "5.2 Regulation of relations", "5.3 Analysis of resources", "5.4 Productivity metrics"],
    theoreticalContent: [
      {
        section: "3.1. Specific Features",
        content: "Trade labor is service-oriented, has variable workloads (peaks), and often lower skill barriers. It has a 'Dual Nature': Physical (moving goods) and Brain/Commercial (consulting/negotiating)."
      }
    ],
    practicalTasks: [
      {
        id: "t5-1",
        title: "Staffing Schedule Optimization",
        objective: "Match staffing to demand patterns.",
        instructions: ["Analyze hourly traffic", "Minimize idle time and overtime", "Ensure legal compliance"],
        deliverable: "Optimized Weekly Schedule."
      }
    ],
    caseStudies: [
      {
        id: "cs5-1",
        title: "The Productivity Paradox",
        situation: "High revenue per employee is actually caused by 20+ hours of overtime/week and extreme burnout.",
        questions: ["What are the flaws in the current metric?", "How to capture true efficiency?"]
      }
    ],
    discussionQuestions: ["Can an enterprise succeed with high turnover?", "Is remote work possible in trade?"],
    independentWork: ["Digitalization and future of retail jobs", "Gender equality: Breaking the Glass Ceiling"],
    problemSituations: [
      {
        id: "ps5-1",
        situation: "A salesperson is a top performer but ignores all safety rules.",
        problem: "Managing the 'Rude Genius'.",
        questions: ["Should you keep them?", "How to enforce rules without losing sales?"]
      }
    ]
  },
  {
    id: 6,
    title: "Payment and Incentives for Labor",
    summary: "Remuneration Forms, Bonus Systems, and Motivation",
    learningObjectives: {
      knowledge: "Understand economic essence of labor remuneration and role of incentives.",
      skills: "Calculate piece-rate vs time-rate and design bonus structures.",
      competencies: "Create motivating packages that minimize turnover."
    },
    lessonPlan: ["6.1 Essence and functions", "6.2 Organization principles", "6.3 Forms and systems", "6.4 Reward systems"],
    theoreticalContent: [
      {
        section: "3.3. Forms of Payment",
        content: "Time-based (predictable), Piece-rate (volume-linked), Commission (percentage of sales), and Mixed systems (base + commission)."
      }
    ],
    practicalTasks: [
      {
        id: "t6-1",
        title: "Compensation Package Design",
        objective: "Design competitive compensation for a store manager.",
        instructions: ["Define base vs variable split", "Set KPIs for bonus", "Calculate total cost to company"],
        deliverable: "Complete Compensation Proposal."
      }
    ],
    caseStudies: [
      {
        id: "cs6-1",
        title: "The Commission Controversy",
        situation: "Aggressive sales tactics to hit bonuses lead to high customer returns and toxic culture.",
        questions: ["How to redesign to include team components?", "What metrics align interest?"]
      }
    ],
    discussionQuestions: ["Can money buy loyalty?", "Should salaries be public or confidential?"],
    independentWork: ["Psychology of incentives", "Executive compensation fair ratios"],
    problemSituations: [
      {
        id: "ps6-1",
        situation: "Manager refuses to pay bonus because 'The goal was too easy'.",
        problem: "Managing the Psychological Contract.",
        questions: ["What are the legal implications?", "How does this affect future motivation?"]
      }
    ]
  },
  {
    id: 7,
    title: "Material and Technical Base",
    summary: "Fixed Assets, Valuation, and Depreciation",
    learningObjectives: {
      knowledge: "Understand composition of technical base and fixed assets nature.",
      skills: "Calculate efficiency indicators like capital productivity.",
      competencies: "Plan for modernization and manage wear and tear."
    },
    lessonPlan: ["7.1 MTB of trade", "7.2 Assessment methods", "7.3 Efficiency indicators", "7.4 Movement and depreciation"],
    theoreticalContent: [
      {
        section: "3.1. Composition",
        content: "Active part (equipment, vehicles, computers) and Passive part (buildings, land). Fixed assets transfer value via depreciation."
      }
    ],
    practicalTasks: [
      {
        id: "t7-1",
        title: "Space Utilization Optimization",
        objective: "Redesign floor plan for efficiency.",
        instructions: ["Analyze sales per sq. meter", "Identify cold spots", "Redesign layout"],
        deliverable: "Optimized Store Floor Plan."
      }
    ],
    caseStudies: [
      {
        id: "cs7-1",
        title: "The Expansion Dilemma",
        situation: "Choice between expanding existing store vs opening in new secondary location.",
        questions: ["How does location quality affect investment?", "What is the ROI?"]
      }
    ],
    discussionQuestions: ["Can an enterprise exist without fixed assets?", "Is historical cost the most honest valuation?"],
    independentWork: ["Logistics 4.0: Drones and Robots", "Renewable Energy as fixed asset"],
    problemSituations: [
      {
        id: "ps7-1",
        situation: "Accountant stops recording depreciation for 1 year to inflate profit.",
        problem: "Distortion of residual value.",
        questions: ["What are the audit risks?", "How to correct the balance sheet?"]
      }
    ]
  },
  {
    id: 8,
    title: "Intangible Assets of Trading Enterprises",
    summary: "IP, Brand Equity, and Valuation Models",
    learningObjectives: {
      knowledge: "Understand definition and types of IA and recognition criteria.",
      skills: "Apply valuation methods (cost, market, income) and calculate amortization.",
      competencies: "Manage Brand Equity as a strategic advantage."
    },
    lessonPlan: ["8.1 IA definition", "8.2 Valuation approaches", "8.3 Useful life", "8.4 Brand concept"],
    theoreticalContent: [
      {
        section: "3.1. Definition",
        content: "Non-physical assets with value. Categories: Intellectual Property, Commercial Rights, Software, and Goodwill."
      }
    ],
    practicalTasks: [
      {
        id: "t8-1",
        title: "Income Approach Lab",
        objective: "Calculate brand value based on extra profit generated.",
        instructions: ["Brand generates extra $1000/year", "Interest rate is 10%", "Calculate total value"],
        deliverable: "Brand Valuation Report."
      }
    ],
    caseStudies: [
      {
        id: "cs8-1",
        title: "The Rebranding Failure",
        situation: "Famous brand changes logo/name; sales drop 40% because of lack of recognition.",
        questions: ["How to measure loss of Brand Equity?", "What steps to take next?"]
      }
    ],
    discussionQuestions: ["Why is IA often more valuable than buildings?", "Can a small shop have goodwill without realizing?"],
    independentWork: ["NFTs and Domain Names as resources", "Brand Equity: Coca-Cola vs Pepsi in Uzbekistan"],
    problemSituations: [
      {
        id: "ps8-1",
        situation: "Partner leaves and wants to take the customer list.",
        problem: "Property rights of intangible assets.",
        questions: ["Is a list an asset?", "What legal protections exist?"]
      }
    ]
  },
  {
    id: 9,
    title: "Resources of Trading Enterprises",
    summary: "Asset Formation, Cash Assets, Working Capital",
    learningObjectives: {
      knowledge: "Understand structure of assets and sources of formation.",
      skills: "Calculate working capital turnover and identify cash risks.",
      competencies: "Optimize Cash Conversion Cycle and manage liquidity."
    },
    lessonPlan: ["9.1 Assets and sources", "9.2 Cash assets", "9.3 Working capital", "9.4 Turnover rate"],
    theoreticalContent: [
      {
        section: "3.3. Working Capital Efficiency",
        content: "The cycle: Cash > Inventory > Accounts Receivable > Cash. Goal: Minimize the gap between paying suppliers and receiving customer money."
      }
    ],
    practicalTasks: [
      {
        id: "t9-1",
        title: "Liquidity Ratio Analysis",
        objective: "Calculate safety of short-term debt coverage.",
        instructions: ["Current assets: $25k", "Short term debt: $10k", "Assess current ratio"],
        deliverable: "Solvency Assessment."
      }
    ],
    caseStudies: [
      {
        id: "cs9-1",
        title: "The Profitable Bankrupt",
        situation: "Shop has $1M in sales and high profit but zero cash (all on credit).",
        questions: ["Identify failure in cash management", "How to fix liquidity?"]
      }
    ],
    discussionQuestions: ["Why is working capital 'the fuel'?", "Can a company have too much cash?"],
    independentWork: ["FinTech impact on SMEs", "Factoring as a tool for speeding up receivables"],
    problemSituations: [
      {
        id: "ps9-1",
        situation: "Customer offers to pay in Bitcoin or Property.",
        problem: "Evaluating liquidity of alternative assets.",
        questions: ["Should the offer be accepted?", "How to value it?"]
      }
    ]
  },
  {
    id: 10,
    title: "Demand and Supply for Consumer Goods",
    summary: "Needs, Factors, and Forecasting",
    learningObjectives: {
      knowledge: "Understand hierarchy of needs and structural relationship between supply/demand.",
      skills: "Identify influencing factors and perform sales forecasting.",
      competencies: "Design supply strategies responding to shifting preferences."
    },
    lessonPlan: ["10.1 Concept of needs", "10.2 Factors affecting demand", "10.3 Forecasting demand", "10.4 Sources of supply"],
    theoreticalContent: [
      {
        section: "3.3. Demand Forecasting",
        content: "Prediction based on past data and future trends. Methods: Quantitative (extrapolation, regression) and Qualitative (Delphi, Jury of Opinion)."
      }
    ],
    practicalTasks: [
      {
        id: "t10-1",
        title: "Trend Projection",
        objective: "Use extrapolation to predict next month sales.",
        instructions: ["Last 3 months: 100, 110, 120 units", "Determine trend line", "Forecast next month"],
        deliverable: "Sales Forecast Chart."
      }
    ],
    caseStudies: [
      {
        id: "cs10-1",
        title: "Over-Forecasting Panic",
        situation: "Supermarket forecasts massive salt demand due to rumor; everyone buys 10kg, then demand drops to zero for months.",
        questions: ["Analyze demand distortions", "How to manage psychological panic?"]
      }
    ],
    discussionQuestions: ["Can business 'create' a need?", "Why is past data often useless in rapid change?"],
    independentWork: ["Nudge Theory in consumer behavior", "Strategic supply chain: Push vs Pull models"],
    problemSituations: [
      {
        id: "ps10-1",
        situation: "Only supplier of high-demand product is in a war zone.",
        problem: "Supply continuity risk.",
        questions: ["How to diversify quickly?", "What is the inventory buffer needed?"]
      }
    ]
  },
  {
    id: 11,
    title: "Retail Turnover",
    summary: "Analysis, Inventory Impact, and Planning",
    learningObjectives: {
      knowledge: "Understand socio-economic nature of retail turnover in the final consumption stage.",
      skills: "Analyze sales using horizontal/vertical methods and design plans.",
      competencies: "Optimize performance by aligning inventory with sales dynamics."
    },
    lessonPlan: ["11.1 Concept", "11.2 Analysis methods", "11.3 Inventory impact", "11.4 Forecasting and planning"],
    theoreticalContent: [
      {
        section: "3.3. Inventory Correlation",
        content: "Critical link: too low inventory leads to empty shelves; too high freezes capital. Stock to Sales Ratio is the key metric."
      }
    ],
    practicalTasks: [
      {
        id: "t11-1",
        title: "Same Store Sales Analysis",
        objective: "Compare store performance over time.",
        instructions: ["Use historical sales data", "Calculate growth ignoring new store openings", "Identify underperformers"],
        deliverable: "SSS Analysis Report."
      }
    ],
    caseStudies: [
      {
        id: "cs11-1",
        title: "Online Cannibalizing In-Store",
        situation: "E-commerce channel launched; 90% of online customers are existing store customers shifting for convenience.",
        questions: ["Was it necessary?", "How to adjust strategy?"]
      }
    ],
    discussionQuestions: ["Why is retail the 'Mirror' of the national economy?", "Is inventory turnover speed more important than margin?"],
    independentWork: ["Smart Stores (no cashiers) impact", "Showrooming vs Webrooming trends"],
    problemSituations: [
      {
        id: "ps11-1",
        situation: "Price factor is responsible for 100% of turnover growth.",
        problem: "Identifying lack of real business growth.",
        questions: ["Is this sustainable?", "What happens if inflation drops?"]
      }
    ]
  },
  {
    id: 12,
    title: "Wholesale Turnover",
    summary: "Necessity, Types, and B2B Analysis",
    learningObjectives: {
      knowledge: "Understand economic necessity of wholesale in bridging gap between producer and retailer.",
      skills: "Distinguish between warehouse and transit turnover; calculate B2B indicators.",
      competencies: "Design effective distribution networks."
    },
    lessonPlan: ["12.1 Necessity and essence", "12.2 Types and indicators", "12.3 Analysis of performance", "12.4 Planning methods"],
    theoreticalContent: [
      {
        section: "3.2. Types",
        content: "Warehouse turnover (goods pass through wholesaler) and Transit turnover (goods go direct, wholesaler handles billing)."
      }
    ],
    practicalTasks: [
      {
        id: "t12-1",
        title: "Transit Ratio Calculation",
        objective: "Analyze structure of wholesale distribution.",
        instructions: ["Sales: $1M", "$700k from warehouse, $300k transit", "Calculate ratio"],
        deliverable: "Distribution Analysis."
      }
    ],
    caseStudies: [
      {
        id: "cs12-1",
        title: "The Middleman Cutout",
        situation: "Large manufacturer starts selling directly to retail chains.",
        questions: ["How to redefine specialized knowledge to stay necessary?", "What value-added services can be added?"]
      }
    ],
    discussionQuestions: ["Is wholesale a cost or a saving for consumers?", "How has dropshipping changed wholesale?"],
    independentWork: ["Role of 3PL in modern trade", "Blockchain in B2B contract fulfillment"],
    problemSituations: [
      {
        id: "ps12-1",
        situation: "B2B client hasn't paid for 60 days but wants a new Full Truckload.",
        problem: "Credit Risk vs Turnover Growth.",
        questions: ["To ship or not to ship?", "How to negotiate?"]
      }
    ]
  },
  {
    id: 13,
    title: "Revenues of Trading Enterprises",
    summary: "Markup, Pricing Strategies, and Analysis",
    learningObjectives: {
      knowledge: "Understand economic nature of Gross Income and pricing sources.",
      skills: "Calculate markups, determine break-even, and analyze structural income.",
      competencies: "Design competitive pricing models balancing demand and profit."
    },
    lessonPlan: ["13.1 Concept and types", "13.2 Trade markup basis", "13.3 Pricing in trade", "13.4 Revenue analysis"],
    theoreticalContent: [
      {
        section: "3.3. Pricing Methods",
        content: "Markup pricing, Keystone pricing (double wholesale), Psychological pricing ($9.99), Bundle, and Skimming."
      }
    ],
    practicalTasks: [
      {
        id: "t13-1",
        title: "Break-even Calculation",
        objective: "Determine required turnover for zero profit.",
        instructions: ["Monthly expenses: $2k", "Average margin: 20%", "Calculate required revenue"],
        deliverable: "Break-even chart."
      }
    ],
    caseStudies: [
      {
        id: "cs13-1",
        title: "Loss Leader Logic",
        situation: "Supermarket sells bread at a loss to attract customers.",
        questions: ["Analyze impact on total gross income", "Is it ethically sound?"]
      }
    ],
    discussionQuestions: ["Is revenue the same as success?", "Why is markup higher for jewelry than sugar?"],
    independentWork: ["Subscription models in trading firms", "Laffer Curve of trade markups"],
    problemSituations: [
      {
        id: "ps13-1",
        situation: "Manager wants to increase markup to 50% while competitors are at 20%.",
        problem: "Predicting impact on turnover (Elasticity).",
        questions: ["Will revenue go up or down?", "What is the optimal point?"]
      }
    ]
  },
  {
    id: 14,
    title: "Expenses of Trading Enterprises",
    summary: "Operating Expenses and Cost Analysis",
    learningObjectives: {
      knowledge: "Understand economic essence of expenses vs losses and cost classification.",
      skills: "Calculate distribution costs and perform CVP analysis.",
      competencies: "Design cost control systems improving profitability."
    },
    lessonPlan: ["14.1 Losses vs Expenses", "14.2 Operating structure", "14.3 Operational analysis", "14.4 Cost analysis methods"],
    theoreticalContent: [
      {
        section: "3.3. Structure",
        content: "Level of Expenses (Le) = (Total Expenses / Total Turnover) * 100. This is the most important efficiency ratio for managers."
      }
    ],
    practicalTasks: [
      {
        id: "t14-1",
        title: "Fixed vs Variable Categorization",
        objective: "Identify cost behaviors.",
        instructions: ["List: Rent, Plastic Bags, Salary, Sales Commission", "Determine behavior", "Calculate total fixed vs variable"],
        deliverable: "Cost Structure Map."
      }
    ],
    caseStudies: [
      {
        id: "cs14-1",
        title: "The High Rent Trap",
        situation: "Boutique moves to cheaper area; sales drop 20% but rent drops 70%.",
        questions: ["Calculate net impact on profitability", "Was it a good move?"]
      }
    ],
    discussionQuestions: ["Is it possible to have Zero Losses?", "Why is cost cutting dangerous for quality?"],
    independentWork: ["Lean Management in retail", "Activity Based Costing (ABC) for products"],
    problemSituations: [
      {
        id: "ps14-1",
        situation: "Manager cuts security guard to save money; theft increases by 10%.",
        problem: "False saving calculation.",
        questions: ["What is the net loss?", "How to re-evaluate the decision?"]
      }
    ]
  },
  {
    id: 15,
    title: "Profit and Profitability",
    summary: "Indicators, Factor Analysis, Growth Directions",
    learningObjectives: {
      knowledge: "Understand profit as reward for risk and hierarchy of ratios.",
      skills: "Calculate ROS, ROA, and ROE; perform multifactorial analysis.",
      competencies: "Design long-term survival strategies focused on capital efficiency."
    },
    lessonPlan: ["15.1 Concept and role", "15.2 Classification and formation", "15.3 Distribution and use", "15.4 Indicators and factors"],
    theoreticalContent: [
      {
        section: "3.2. Indicators",
        content: "Return on Sales (ROS) = Net Profit / Turnover. Return on Assets (ROA) = Net Profit / Average Total Assets. Return on Equity (ROE) = Net Profit / Average Own Capital."
      }
    ],
    practicalTasks: [
      {
        id: "t15-1",
        title: "ROA Exercise",
        objective: "Assess efficiency of physical asset utilization.",
        instructions: ["Assets: $50k", "Net Profit: $5k", "Compare to 5% bank interest"],
        deliverable: "Investment Efficiency Report."
      }
    ],
    caseStudies: [
      {
        id: "cs15-1",
        title: "The Luxury Shift",
        situation: "Shop stops selling cheap bread, starts selling exotic fruits. Turnover falls but ROS triples.",
        questions: ["Analyze assortment structure factor", "Is this a sustainable growth path?"]
      }
    ],
    discussionQuestions: ["Is profit the same as cash in bank?", "Should society celebrate high profits of private firms?"],
    independentWork: ["Social Profitability concept", "Creative accounting: ethics and dangers"],
    problemSituations: [
      {
        id: "ps15-1",
        situation: "ROA is 10% but interest rate on bank loan is 15%.",
        problem: "Destructive leverage analysis.",
        questions: ["How to survive?", "What are the options for restructuring?"]
      }
    ]
  }
];
