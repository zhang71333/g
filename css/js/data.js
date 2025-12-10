// 外贸函电题目数据（根据提供的答案和章节整理，可替换为实际题目）
const quizData = {
    // 第十一章：包装（填空题）
    packaging: {
        title: "第十一章：包装 - 单词填空题",
        totalScore: 8,
        questions: [
            {
                type: "fill",
                title: "1. We have _______ (收到) your letter of June 10.",
                correctAnswer: "received",
                score: 1
            },
            {
                type: "fill",
                title: "2. We are writing to _______ (通知) you of the shipment details.",
                correctAnswer: "inform",
                score: 1
            },
            {
                type: "fill",
                title: "3. Please arrange the goods _______ (给) our order No. 123.",
                correctAnswer: "to",
                score: 1
            },
            {
                type: "fill",
                title: "4. The goods were found with slight _______ (损坏) upon arrival.",
                correctAnswer: "damage",
                score: 1
            },
            {
                type: "fill",
                title: "5. We must _______ (避免) any delay in delivery.",
                correctAnswer: "avoid",
                score: 1
            },
            {
                type: "fill",
                title: "6. The packages _______ (是) strong enough for sea transport.",
                correctAnswer: "be",
                score: 1
            },
            {
                type: "fill",
                title: "7. _______ (每个) carton should be marked with the shipping marks.",
                correctAnswer: "each",
                score: 1
            },
            {
                type: "fill",
                title: "8. All the requirements have been _______ (满足).",
                correctAnswer: "met",
                score: 1
            }
        ]
    },

    // 第六章：还盘（选择题）
    counter-offer: {
        title: "第六章：还盘 - 选择题",
        totalScore: 10,
        questions: [
            {
                type: "choice",
                title: "1. A counter-offer is a _______ of the original offer.",
                options: [
                    "A. Acceptance",
                    "B. Rejection",
                    "C. Modification",
                    "D. Confirmation"
                ],
                correctAnswer: "B",
                score: 1
            },
            {
                type: "choice",
                title: "2. When making a counter-offer, the buyer usually _______ the price.",
                options: [
                    "A. Increases",
                    "B. Reduces",
                    "C. Maintains",
                    "D. Ignores"
                ],
                correctAnswer: "B",
                score: 1
            },
            // 以下题目为占位符，可替换为实际外贸函电题目（答案对应文档中的 BBACAABCAC）
            { type: "choice", title: "3. The counter-offer becomes effective when _______.", options: ["A. Sent", "B. Received", "C. Drafted", "D. Signed"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "4. Which of the following is NOT a part of a counter-offer?", options: ["A. Price", "B. Quantity", "C. Original offer date", "D. Payment terms"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "5. If the seller accepts the counter-offer, a _______ is formed.", options: ["A. Contract", "B. Offer", "C. Inquiry", "D. Proposal"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "6. A counter-offer can be _______ by the original offeror.", options: ["A. Rejected", "B. Extended", "C. Renewed", "D. Canceled"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "7. The validity period of a counter-offer is usually _______ than the original offer.", options: ["A. Longer", "B. Shorter", "C. Same", "D. Uncertain"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "8. When modifying the payment terms in a counter-offer, the buyer should _______.", options: ["A. Keep silent", "B. Clearly state", "C. Avoid mentioning", "D. Refer to the original"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "9. A counter-offer terminates the _______ offer.", options: ["A. New", "B. Original", "C. Subsequent", "D. Provisional"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "10. The seller may _______ the counter-offer with a new offer.", options: ["A. Accept", "B. Reject", "C. Counter", "D. Ignore"], correctAnswer: "C", score: 1 }
        ]
    },

    // 第十二章：运输（选择题，答案对应 BCACABDBCA）
    transportation: {
        title: "第十二章：运输 - 选择题",
        totalScore: 10,
        questions: [
            { type: "choice", title: "1. The main mode of international sea transport is _______.", options: ["A. Air", "B. Shipping", "C. Rail", "D. Road"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "2. FOB means the seller is responsible for _______.", options: ["A. Freight", "B. Insurance", "C. Loading", "D. Unloading"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "3. Which term requires the seller to pay for freight?", options: ["A. FOB", "B. EXW", "C. CIF", "D. FCA"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "4. The shipping document that proves the receipt of goods is _______.", options: ["A. Bill of Lading", "B. Invoice", "C. Packing List", "D. Insurance Policy"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "5. Partial shipment is _______ unless otherwise stated in the contract.", options: ["A. Allowed", "B. Prohibited", "C. Optional", "D. Required"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "6. The port of destination is specified by the _______.", options: ["A. Seller", "B. Buyer", "C. Carrier", "D. Forwarder"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "7. Which of the following is a land transport mode?", options: ["A. Shipping", "B. Rail", "C. Air", "D. Courier"], correctAnswer: "D", score: 1 },
            { type: "choice", title: "8. The carrier is responsible for _______ the goods safely.", options: ["A. Producing", "B. Selling", "C. Transporting", "D. Storing"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "9. LCL stands for _______.", options: ["A. Full Container Load", "B. Less than Container Load", "C. Large Container Load", "D. Light Container Load"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "10. The shipping date should be in line with the _______.", options: ["A. Invoice date", "B. Contract date", "C. L/C date", "D. Delivery date"], correctAnswer: "A", score: 1 }
        ]
    },

    // 第十四章：索赔与理赔（选择题，答案对应 CABABCCACC）
    claim: {
        title: "第十四章：索赔与理赔 - 选择题",
        totalScore: 10,
        questions: [
            { type: "choice", title: "1. A claim is made when the _______ suffers a loss.", options: ["A. Seller", "B. Carrier", "C. Buyer", "D. Forwarder"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "2. The basis for a claim is the _______.", options: ["A. Verbal agreement", "B. Contract terms", "C. Oral promise", "D. Market price"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "3. To make a valid claim, the buyer must provide _______.", options: ["A. Evidence", "B. Payment", "C. Goods", "D. Documents"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "4. The seller may _______ the claim if it is unreasonable.", options: ["A. Accept", "B. Reject", "C. Modify", "D. Delay"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "5. Compensation for a claim usually includes _______.", options: ["A. Price reduction", "B. Discount", "C. Free goods", "D. All of the above"], correctAnswer: "B", score: 1 },
            { type: "choice", title: "6. The time limit for making a claim is specified in the _______.", options: ["A. Invoice", "B. Packing List", "C. Contract", "D. Bill of Lading"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "7. A claim for quality issues should be made _______ inspection.", options: ["A. Before", "B. After", "C. During", "D. Without"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "8. The理赔 process involves _______ the claim.", options: ["A. Denying", "B. Verifying", "C. Ignoring", "D. Hiding"], correctAnswer: "A", score: 1 },
            { type: "choice", title: "9. If the carrier is liable, the claim should be made to _______.", options: ["A. Seller", "B. Buyer", "C. Carrier", "D. Insurance company"], correctAnswer: "C", score: 1 },
            { type: "choice", title: "10. A successful claim results in _______ for the buyer.", options: ["A. Loss", "B. Compensation", "C. Penalty", "D. Delay"], correctAnswer: "C", score: 1 }
        ]
    }
};
