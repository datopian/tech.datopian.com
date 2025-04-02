---
created: 2025-04-02
authors:
  - Anuar Ustayev
---
I prefer YAML over JSON and here's why — in no uncertain technical terms:

1. **YAML is for humans. JSON is for machines.**  
    YAML lets me write clean, readable config without drowning in brackets, quotes, and commas. JSON feels like I'm writing for a parser, not a person.
    

```yaml
name: Anu  
roles:  
  - Technical Lead  
  - Opportunity Analyst  
```

vs.

```json
{
  "name": "Anu",
  "roles": ["Technical Lead", "Opportunity Analyst"]
}
```

YAML wins — hands down.

2. **Multi-line strings in YAML don't suck.**  
    If you've ever tried putting a block of Markdown or SQL into JSON, you know the pain. YAML gives me `|` and `>` — simple, elegant. JSON makes me escape like I'm in the Matrix.
    
3. **Comments.**  
    JSON doesn’t support comments. Why? Because it's a data-interchange format, not a config format. YAML lets me leave notes, explanations, TODOs. This alone makes JSON a non-starter for serious configuration work.
    
4. **Natural hierarchy.**  
    Indentation in YAML maps directly to how I think about data structures. JSON's brackets within brackets make it harder to parse visually. It's like looking at a syntax tree instead of real content.
    
5. **YAML is made for configuration. JSON isn’t.**  
    JSON came out of JavaScript and works great for serializing data across systems. YAML was designed from the ground up to be _written and read by people_. That distinction matters a lot when you're managing real-world config files.
    
6. **Advanced features.**  
    YAML has anchors, aliases, environment variable support, merge keys — things that actually help you manage growing complexity. JSON gives you... none of that. Once you're over a few hundred lines, JSON becomes a productivity tax.
    

Bottom line: I write configuration for humans to read, not just machines to parse. YAML gets that. JSON doesn’t.