"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6028],{855:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(85893),d=s(11151);const t={title:"Engineering",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},i=void 0,l={id:"handbook/engineering",title:"Engineering",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/handbook/engineering.md",sourceDirName:"handbook",slug:"/handbook/engineering",permalink:"/handbook/engineering",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/handbook/engineering.md",tags:[],version:"current",lastUpdatedBy:"Hieu",lastUpdatedAt:1704701244,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Engineering",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"aboutSidebar",previous:{title:"Product",permalink:"/handbook/product"}},c={},o=[{value:"Connecting to Rigs",id:"connecting-to-rigs",level:2},{value:"Pritunl Setup",id:"pritunl-setup",level:3},{value:"Llama.cpp Setup",id:"llamacpp-setup",level:3},{value:"TensorRT-LLM Setup",id:"tensorrt-llm-setup",level:3},{value:"<strong>Docker and TensorRT-LLM build</strong>",id:"docker-and-tensorrt-llm-build",level:4},{value:"Running TensorRT-LLM",id:"running-tensorrt-llm",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"connecting-to-rigs",children:"Connecting to Rigs"}),"\n",(0,r.jsx)(n.h3,{id:"pritunl-setup",children:"Pritunl Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Install Pritunl"}),": ",(0,r.jsx)(n.a,{href:"https://client.pritunl.com/#install",children:"Download here"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Import .ovpn file"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"VSCode"}),': Install the "Remote-SSH" extension for connection']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"llamacpp-setup",children:"Llama.cpp Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Clone Repo"}),": ",(0,r.jsx)(n.code,{children:"git clone https://github.com/ggerganov/llama.cpp && cd llama.cpp"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Build"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir build && cd build\ncmake .. -DLLAMA_CUBLAS=ON -DLLAMA_CUDA_F16=ON -DLLAMA_CUDA_MMV_Y=8\ncmake --build . --config Release\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Download Model:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ../models && wget https://huggingface.co/TheBloke/Llama-2-7B-GGUF/resolve/main/llama-2-7b.Q8_0.gguf\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Run:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cd ../build/bin/\n./main -m ./models/llama-2-7b.Q8_0.gguf -p "Writing a thesis proposal can be done in 10 simple steps:\\nStep 1:" -n 2048 -e -ngl 100 -t 48\n'})}),"\n",(0,r.jsx)(n.p,{children:"For the llama.cpp CLI arguments you can see here:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Short Option"}),(0,r.jsx)(n.th,{children:"Long Option"}),(0,r.jsx)(n.th,{children:"Param Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-h"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--help"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Show this help message and exit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-i"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--interactive"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Run in interactive mode"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--interactive-first"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Run in interactive mode and wait for input right away"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-ins"}),", ",(0,r.jsx)(n.code,{children:"--instruct"})]}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Run in instruction mode (use with Alpaca models)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-r"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--reverse-prompt"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PROMPT"})}),(0,r.jsxs)(n.td,{children:["Run in interactive mode and poll user input upon seeing ",(0,r.jsx)(n.code,{children:"PROMPT"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--color"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Colorise output to distinguish prompt and user input from"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Generations"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-s"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--seed"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SEED"})}),(0,r.jsx)(n.td,{children:"Seed for random number generator"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-t"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--threads"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Number of threads to use during computation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-p"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--prompt"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PROMPT"})}),(0,r.jsx)(n.td,{children:"Prompt to start generation with"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--random-prompt"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Start with a randomized prompt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--in-prefix"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"STRING"})}),(0,r.jsx)(n.td,{children:"String to prefix user inputs with"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-f"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--file"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FNAME"})}),(0,r.jsx)(n.td,{children:"Prompt file to start generation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-n"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--n_predict"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Number of tokens to predict"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--top_k"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Top-k sampling"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--top_p"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Top-p sampling"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--repeat_last_n"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Last n tokens to consider for penalize"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--repeat_penalty"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Penalize repeat sequence of tokens"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-c"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--ctx_size"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Size of the prompt context"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--ignore-eos"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Ignore end of stream token and continue generating"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--memory_f32"})}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Use ",(0,r.jsx)(n.code,{children:"f32"})," instead of ",(0,r.jsx)(n.code,{children:"f16"})," for memory key+value"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--temp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Temperature"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--n_parts"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Number of model parts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-b"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--batch_size"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"N"})}),(0,r.jsx)(n.td,{children:"Batch size for prompt processing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--perplexity"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Compute perplexity over the prompt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--keep"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number of tokens to keep from the initial prompt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--mlock"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Force system to keep model in RAM"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--mtest"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Determine the maximum memory usage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--verbose-prompt"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Print prompt before generation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-m"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--model"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"FNAME"})}),(0,r.jsx)(n.td,{children:"Model path"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"tensorrt-llm-setup",children:"TensorRT-LLM Setup"}),"\n",(0,r.jsx)(n.h4,{id:"docker-and-tensorrt-llm-build",children:(0,r.jsx)(n.strong,{children:"Docker and TensorRT-LLM build"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: You should run with admin permission to make sure everything works fine"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Docker Image:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo make -C docker build\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Run Container:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo make -C docker run\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once in the container, TensorRT-LLM can be built from the source using the following:"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Build:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# To build the TensorRT-LLM code.\npython3 ./scripts/build_wheel.py --trt_root /usr/local/tensorrt\n# Deploy TensorRT-LLM in your environment.\npip install ./build/tensorrt_llm*.whl\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: You can specify the GPU architecture (e.g. for 4090 is ADA) for compilation time reduction\nThe list of supported architectures can be found in the ",(0,r.jsx)(n.code,{children:"CMakeLists.txt"})," file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'python3 ./scripts/build_wheel.py --cuda_architectures "89-real;90-real"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"running-tensorrt-llm",children:"Running TensorRT-LLM"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Requirements:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install -r examples/bloom/requirements.txt && git lfs install\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Download Weights:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd examples/llama && rm -rf ./llama/7B && mkdir -p ./llama/7B && git clone https://huggingface.co/NousResearch/Llama-2-7b-hf ./llama/7B\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Build Engine:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python build.py --model_dir ./llama/7B/ --dtype float16 --remove_input_padding --use_gpt_attention_plugin float16 --enable_context_fmha --use_gemm_plugin float16 --use_weight_only --output_dir ./llama/7B/trt_engines/weight_only/1-gpu/\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Run Inference:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'python3 run.py --max_output_len=2048 --tokenizer_dir ./llama/7B/ --engine_dir=./llama/7B/trt_engines/weight_only/1-gpu/ --input_text "Writing a thesis proposal can be done in 10 simple steps:\\nStep 1:"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For the tensorRT-LLM CLI arguments, you can see in the ",(0,r.jsx)(n.code,{children:"run.py"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var r=s(67294);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);