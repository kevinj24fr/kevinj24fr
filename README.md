# Kevin Joseph

[![Email](https://img.shields.io/badge/Email-kevin.joseph@uniklinik--freiburg.de-blue?logo=gmail)](mailto:kevin.joseph@uniklinik-freiburg.de)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kevin%20Joseph-blue?logo=linkedin)](https://www.linkedin.com/in/josephkevin)  
[![ORCID](https://img.shields.io/badge/ORCID-0000--0001--6317--8736-a6ce39?logo=orcid)](https://orcid.org/0000-0001-6317-8736) 
📍 University Clinic of Freiburg, Germany

---
## Mission

I lead an interdisciplinary research program where **single-cell & spatial transcriptomics**, **AI**, and **neurotechnology** converge. We aim to transform **high-dimensional biological data** into **clinical insights** and to advance fundamental understanding of how the brain responds to tumors, trauma, and intervention.

---
## Computational Expertise

- **Rust**: Production systems for scientific data processing, CLI tooling, pipeline orchestration
- **R**: Transcriptomics, Genomics, Spectroscopy
- **Python**: PyTorch, scVI, Pyro, Scanpy
- **Graph modeling**: PyG, NetworkX
- **Machine learning**: VAEs, interpretable ML (SHAP, IG), prototype learning
- **Spatial analysis**: karna
- **Signal processing**: electrophysiology, calcium imaging, Spectroscopy

---
## Rust Tools for Bioinformatics

Fast, single-binary CLI tools for common bioinformatics tasks. No Python startup time, no dependency hell.

**File inspection — instant summaries without loading data:**

| Tool | What it does | Highlight |
|------|-------------|-----------|
| [**h5peek**](https://github.com/kevinj24fr/h5peek) | Inspect h5ad (AnnData) files | 530x faster than scanpy |
| [**mtxpeek**](https://github.com/kevinj24fr/mtxpeek) | Inspect 10x CellRanger MTX output | Reads gzipped MTX in milliseconds |
| [**fqpeek**](https://github.com/kevinj24fr/fqpeek) | FASTQ stats: reads, quality, GC content | Single-pass streaming, handles .gz |
| [**csvpeek**](https://github.com/kevinj24fr/csvpeek) | CSV/TSV summary: shape, column types, nulls | Type inference, auto-detect delimiter |
| [**jsonpeek**](https://github.com/kevinj24fr/jsonpeek) | JSON/JSONL schema detection and summary | Key frequencies, nested structure |
| [**countpeek**](https://github.com/kevinj24fr/countpeek) | Count matrix summary: sparsity, top genes | Streaming O(1) memory |

**Misc tools:**

| Tool | What it does | Highlight |
|------|-------------|-----------|
| [**geneid**](https://github.com/kevinj24fr/geneid) | ENSEMBL / symbol / Entrez ID conversion | 44,981 genes embedded in a 2.4MB binary |
| [**genesets**](https://github.com/kevinj24fr/genesets) | Query MSigDB gene sets, run enrichment | 8,316 sets (Hallmark + KEGG + GO BP), Fisher's exact test + FDR |
| [**overlap**](https://github.com/kevinj24fr/overlap) | Compare gene lists: intersection, Jaccard | Case-insensitive, 2 or 3 list comparison |
| [**gtfq**](https://github.com/kevinj24fr/gtfq) | Query GTF/GFF gene annotations | Binary index for instant lookups after first run |

---



