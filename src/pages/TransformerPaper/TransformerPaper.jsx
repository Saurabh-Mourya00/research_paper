import React from "react";
import "./TransformerPaper.css";

function TransformerPaper() {
    return (
        <div className="note-page">
            <h2>What is a Transformer?</h2>
            {/* Add your notes here */}
            <p class="svelte-s9hg3b">Transformer is a neural network architecture that has fundamentally changed the approach to
                Artificial Intelligence. Transformer was first introduced in the seminal paper
                <a href="https://dl.acm.org/doi/10.5555/3295222.3295349" title="ACM Digital Library" target="_blank" class="svelte-s9hg3b">"Attention is All You Need"</a>
                in 2017 and has since become the go-to architecture for deep learning models, powering text-generative
                models like OpenAI's <strong>GPT</strong>, Meta's <strong>Llama</strong>, and Google's
                <strong>Gemini</strong>. Beyond text, Transformer is also applied in
                <a href="https://huggingface.co/learn/audio-course/en/chapter3/introduction" title="Hugging Face" target="_blank" class="svelte-s9hg3b">audio generation</a>,
                <a href="https://huggingface.co/learn/computer-vision-course/unit3/vision-transformers/vision-transformers-for-image-classification" title="Hugging Face" target="_blank" class="svelte-s9hg3b">image recognition</a>,
                <a href="https://elifesciences.org/articles/82819" title="eLife" class="svelte-s9hg3b">protein structure prediction</a>, and even
                <a href="https://www.deeplearning.ai/the-batch/reinforcement-learning-plus-transformers-equals-efficiency/" title="Deep Learning AI" target="_blank" class="svelte-s9hg3b">game playing</a>, demonstrating its versatility across numerous domains.
            </p>
            <p class="svelte-s9hg3b">Fundamentally, text-generative Transformer models operate on the principle of <strong>next-word prediction</strong>: given a text prompt from the user, what is the <em>most probable next word</em> that will follow
			this input? The core innovation and power of Transformers lie in their use of self-attention mechanism,
			which allows them to process entire sequences and capture long-range dependencies more effectively
			than previous architectures.
            </p>
        </div>
    );
}

export default TransformerPaper;
