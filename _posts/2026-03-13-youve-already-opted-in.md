---
layout: essay
title: "You've Already Opted In"
subtitle: "How your data trains AI without your consent"
date: 2026-03-13
tags: [AI, technology, privacy, law]
---

In 2026, it is more accurate to say that people have already been enrolled in AI training than to ask whether they wish to "opt in." Generative and predictive models are built on large mixtures of web-scraped text, social-media content, product logs, and advertising telemetry that reflect years of ordinary online behaviour. Most individuals never encounter an AI-specific consent screen; their contribution is mediated instead through terms of service, tracking cookies, and product settings that treat model training as "service improvement."

Regulators have begun to acknowledge that obtaining explicit, revocable consent from each person whose data appears in training corpora is largely impracticable at internet scale, especially for web scraping and cross-platform tracking. As a result, the dominant legal framing in Europe and elsewhere rests on "legitimate interests," a legal term that removes individual control over personal data as the primary object of regulation. Instead, it *assumes* that large-scale data processing is unavoidable, and focuses on balancing that activity against individual rights after the fact.

Contemporary AI systems rely on large datasets assembled from online activity so heavily that most people are already inside the training environment, whether or not they ever consciously engage with AI. Legal and technical infrastructures have been built on the premise of ubiquitous data availability: regulators increasingly surrender to the idea that individual consent is impracticable at scale for key practices such as web scraping, while platforms and corporations normalize surveillance. The result is an environment where "big data" is not just a quantitative descriptor but the precondition for competitive participation in AI development, and in which meaningful non-participation of the end user has become effectively impossible.

This essay examines four major pipelines through which personal data flows into contemporary AI systems. Each traces a different route — mass text harvesting, social media, advertising, and downstream models — showing how ordinary digital behaviour becomes embedded in the infrastructure that trains and powers modern AI.

## Big Data is a Structural Condition

First, we should set the record straight: data is no longer a byproduct or measurement of our time spent online. It is now a primary source of value; it is the substrate in which our digital (and increasingly, physical) lives are grown.

From the perspective of service providers, the relevant question is no longer whether data can be collected, but how much and from where. Large language and multimodal models are trained on mixtures of scraped web text, digitised books, code repositories, images, and other online content, precisely because such data provides the **only** available corpora at the scale required for current architectures. Reporting and technical analyses disclose that these training sets routinely include **personal information** — names, contact details, biographical profiles — because they mirror what people expose online via day-to-day activities.

This dependence on large-scale datasets translates directly into competitive advantage. Organizations that control major web platforms, social networks, or adtech infrastructure possess high-quality libraries of behavioral and interaction data that can be used to train and direct user attention. Meanwhile, empirical work on model privacy risks shows that trained models may retain statistically detectable traces of individual records, which contradicts common narratives stating that data can easily be anonymized. Together, these dynamics fix data as both an economic and a technical prerequisite for contemporary AI, and they make the idea of a clean boundary between opting in and out of training sets increasingly untenable.

## Pipeline 1: Web Scraping

Web scraping is the foundational practice through which AI developers obtain large text and image datasets. Automated programs systematically copy publicly reachable pages — including blogs, forums, documentation sites, news articles, and other publisher content — into datasets that can reach billions of pages in length. Analyses of prominent datasets and legal commentary alike confirm that these collections frequently contain personal information and copyrighted material, reflecting the composition of the web itself rather than any fine-grained selection for consent or licensing status.

Regulators have been explicit that obtaining informed, granular consent from each individual whose data appears in scraped content is, in practice, unworkable. The UK Information Commissioner's Office, for example, has suggested that "legitimate interests" will often be the only realistic lawful basis for web scraping in the context of generative AI, subject to implicit permissions rather than individual opt-ins. Submissions to the ICO's consultation process acknowledge that data collectors have no direct relationship with most data subjects and cannot feasibly notify or solicit consent across billions of web pages. In this sense, scraping presupposes that people have already "agreed" by virtue of publishing on the open web, even though data-protection laws do not treat public availability as consent for arbitrarily repurposed processing.

Attempts to retrofit transparency into this environment tend to focus on high-level disclosures and partial opt-outs. Some initiatives advocate for labelling of models trained predominantly on licensed or public-domain content, while others explore technical signals (such as `robots.txt` directives) to express site-level preferences about scraping. Yet these measures operate under a core assumption: that the public web is, by default, a mineable resource.

> *Scraping presupposes that people have already "agreed" by virtue of publishing on the open web, even though legal precedent does not treat public availability as consent.*

## Pipeline 2: Social Platforms and Shadow Profiles

Social platforms occupy a different position in the data landscape. They capture information about personal ties, interactions, and preferences — follows, likes, comments, shares — that is valuable for both narrow recommendation systems and broader AI models. Policy updates and reporting over the past several years show major platforms stating that public posts and images may be used to train AI tools, including generative models.

A central feature of these systems is that they additionally create and enrich records about people who are not active participants, or who participate only minimally. Research and investigative work on "shadow profiles" documents how platforms take contact lists, tagged photos, and other users' uploads to construct profiles of non-users or abandoned profiles, sometimes long before or after any intentional use. Platforms typically claim that collected data is used to improve services such as friend recommendations, security checks, and targeted advertising — functions that primarily affect only active users. When the same data is incorporated into AI training or fine-tuning pipelines, however, this boundary begins to collapse. In training datasets, the significance of a record often lies less in the choices of the individual who generated it than in its statistical relationship to other records.

Even individuals who never post publicly, or who avoid creating accounts on major platforms, can be represented in training data through other people's disclosures and ubiquitous contact-sync features. Opting out, in such a context, would require coordinated non-participation across social networks and a redesign of platform infrastructures that currently treat all captured signals as potential inputs into learning systems.

> *Opting out would require coordinated non-participation across social networks and a redesign of platform infrastructures.*

## Pipeline 3: Advertising Telemetry

Contemporary advertising relies on continuous collection of behavioral telemetry: page views, clicks, time on site, approximate location, device characteristics, referrers, and trackers. This infrastructure was built to support targeting and measurement, but the same logs are now routinely used as training data for models that predict clicks or purchases, and that construct targeting profiles for advertisers.

Empirical investigations of industry "opt-out" tools show that even motivated individuals struggle to prevent their data from being collected and propagated across the adtech ecosystem, due to fragmented interfaces, opaque identifiers, and the persistence of historical logs. From a model-development perspective, these constraints are not incidental: the value of behavioral data lies precisely in its continuity and coverage, and the cost of honoring per-person retroactive withdrawal would be substantial for systems already trained on large corpora.

## Pipeline 4: "Synthetic" Data

Across web scraping, social platforms, and adtech pipelines, the immediate output is not a model but a set of large datasets assembled from digital traces. These collections are cleaned, normalized, and filtered before being combined into training corpora for machine learning systems. Because their composition largely mirrors what is available online, they inevitably include personal data in many forms. Thanks to shadow profiles, even when individual records are anonymized, they retain value through aggregation.

Once trained on these broad datasets, models are further refined using narrower and often more sensitive data sources. Fine-tuning stages incorporate application-specific dialogues, user interactions, and engagement signals like comment threads, clicks, or viewing behavior. The resulting systems are deployed on social media feeds, recommendation engines, and advertising exchanges to optimize for your attention. Deployment itself generates additional data, which is subsequently fed back into the training pipeline. In effect, data collection and model improvement become mutually reinforcing, creating a feedback loop that advantages those who already control large-scale user data streams.

This pipeline raises perhaps the most consequential privacy implications. Research in machine learning privacy has demonstrated that trained models can sometimes reveal information about their training data through techniques such as membership-inference attacks. Even if raw records are later deleted or anonymized, their statistical influence can persist in the model parameters derived from them. In this sense, personal data does not merely pass through the system — it becomes embedded within models that may be reused, fine-tuned, and deployed far downstream from the original point of collection.

## Conclusion

Taken together, these pipelines illustrate how personal data moves from ordinary digital activity into the infrastructure of AI. Web scraping absorbs the public web into large training libraries; social platforms transform interactions into personal information; advertising telemetry tracks behavior across much of the online economy; and downstream training converts these datasets into models that are widely reused and redeployed. At no point in this process is participation meaningfully negotiated with the individuals whose data is involved. Instead, participation emerges as a structural consequence of how digital systems are organized.

This arrangement reflects a broader shift in how personal information functions within the digital economy. Data is no longer merely collected to provide discrete services or features. It has become a raw material for model development and a tangible input into systems whose effects extend far beyond the platforms where the data was first generated. As AI systems are trained, fine-tuned, and deployed across industries, the traces of everyday online activity become embedded within technical infrastructures that persist and evolve independently of their original sources.

Seen in this light, debates about whether individuals should "opt in" to AI training describe only a small part of the phenomenon. The pipelines described here suggest that participation in AI development has already been distributed across the population through the routine operation of digital platforms. Rather than a question of individual choice, the relationship between people and AI systems is increasingly defined by the structural conditions of a data-saturated environment.

<div class="references">

## References

1. Bender, Emily M., Zhao, Ben, et al. "Your Personal Information Is Probably Being Used to Train Generative AI Models." *Scientific American*, 19 October 2023.
2. Information Commissioner's Office (ICO). "The lawful basis for web scraping to train generative AI models." 31 August 2025.
3. Hamlins. "Decoding the ICO's Generative AI guidelines: what you need to know." 5 March 2025.
4. Center for Data Innovation. "Written Evidence Submission on the Lawful Basis for Web Scraping to Train Generative AI Models." 2024.
5. Al Jazeera. "Are tech companies using your private data to train AI models?" 24 November 2025.
6. Microsoft Research. "Collecting telemetry data privately." 7 December 2017.
7. TrustArc. "Tracking Technologies: The Hidden Backbone of AdTech and the Privacy Minefield It Creates." 21 September 2025.
8. The Markup. "I Tried to Use the Ad Tech Industry's Tool to Opt Out of Personalized Ads. Did It Work?" 24 March 2021.
9. Vox. "The tricky truth about how generative AI uses your data." 26 July 2023.
10. OpenMined. "ML Privacy Meter: Aiding Regulatory Compliance by Quantifying the Privacy Risks of Machine Learning." 2024.
11. Dev.to. "The Ghost in the Machine: How Social Media AI Builds Shadow Profiles on People Who Never Signed Up." 2026.
12. ICO. "What are the conditions for processing?" 2023.

</div>
