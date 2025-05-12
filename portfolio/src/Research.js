import React from "react";

import './App.css'

import Cartoonimator from './assets/research/cartoonimator.png';
import Beholder from './assets/research/beholder.png';
import Hammerblade from './assets/research/hammerblade.png';
import Skinkit from './assets/research/skinkit.jpg';
import Playground from './assets/research/playground.jpg';
import Dualstream from './assets/research/dualstream.png';

import Cartoonimator_paper from './assets/papers/cartoonimator_paper_tei25.pdf';
import Cartoonimator_poster from './assets/papers/cartoonimator_poster_idc23.pdf';
import Playground_paper from './assets/papers/pp_paper_tei25.pdf';
import Beholder_paper from './assets/papers/beholder_paper_siggraph22.pdf';


export default function Research( {setActiveSection} ) {
    return (
        <>
            <div className="Body">
                <p>In my research, I explore low-cost tangible interfaces for children to engage wtih computing in a creative, tinkering manner. I leverage everyday materials like paper and craft materials, and ubiquitous devices such as smartphones and cameras to create affordable and extensible tools that educators and learners can utilize.</p>
            </div>
            <div className="Nav-menu">
                <div className="Nav-item Nav-selected" onClick={() => setActiveSection("research")}>RESEARCH</div><div>&#9670;</div>
                <div className="Nav-item" onClick={() => setActiveSection("creative")}>CREATIVE</div><div>&#9671;</div>
                <div className="Nav-item" onClick={() => setActiveSection("photos")}>PHOTOS</div><div>&#9671;</div>
            </div>
            <div className="Content">
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Cartoonimator}  alt="Cartoonimator" />
                    </div>
                    <div className="Paper-info">
                        <h3>Cartoonimator: A Paper-based Tangible Kit for Keyframe Animation</h3>
                        <p>Krithik Ranjan, Peter Gyory, Seneca Howell, Therese Stewart, Michael L. Rivera, and Ellen Yi-Luen Do. 2025. In Tangible, Embedded, and Embodied Interaction (TEI ’25).</p>
                        <p>Krithik Ranjan, Peter Gyory, Michael L Rivera, and Ellen Yi-Luen Do. 2023. In Interaction Design and Children (IDC ’23).</p>
                        <a href={Cartoonimator_paper}>PDF</a>&ensp;&#9671;&ensp;<a href="https://doi.org/10.1145/3689050.3704955">DOI</a>&ensp;&#9671;&ensp;<a href={Cartoonimator_poster}>POSTER</a>&ensp;&#9671;&ensp;<a href="https://krithik-ranjan.github.io/cartoonimator/">WEBSITE</a>
                    </div>
                </div>
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Playground}  alt="Paper Playground" />
                    </div>
                    <div className="Paper-info">
                        <h3>Physical Computing with Paper Playground: Exploring a Multimodal Platform</h3>
                        <p>Krithik Ranjan, Ann Eisenberg, Brett L. Fiedler, Jesse Eisenberg, Taliesin L. Smith, Emily B. Moore. 2025. In Tangible, Embedded, and Embodied Interaction (TEI ’25).</p>
                        <a href={Playground_paper}>PDF</a>&ensp;&#9671;&ensp;<a href="https://doi.org/10.1145/3689050.3705981">DOI</a>&ensp;&#9671;&ensp;<a href="https://youtu.be/aG84SCipiZs">VIDEO</a> 
                    </div>
                </div>
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Dualstream}  alt="DualStream" />
                    </div>
                    <div className="Paper-info">
                        <h3>DualStream: Spatially Sharing Selves and Surroundings using Mobile Devices and Augmented Reality</h3>
                        <p>Rishi Vanukuru, Suibi Che-Chuan Weng, Krithik Ranjan, Torin Hopkins, Amy Banic, Mark Gross, Ellen Yi-Luen Do. 2023. In IEEE International Symposium on Mixed and Augmented Reality (ISMAR '23).</p>
                        <a href="https://doi.org/10.1109/ISMAR59233.2023.00028">DOI</a>&ensp;&#9671;
                    </div>
                </div>
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Beholder}  alt="Beholder" />
                    </div>
                    <div className="Paper-info">
                        <h3>Directing Tangible Controllers with Computer Vision and Beholder</h3>
                        <p>Peter Gyory, Krithik Ranjan, Zhen Zhou Yong, Clement Zheng, Ellen Yi-Luen Do. 2022. In SIGGRAPH Asia Emerging Technologies '22.</p>
                        <a href={Beholder_paper}>PDF</a>&ensp;&#9671;&ensp;<a href="https://doi.org/10.1145/3550471.3564764">DOI</a>&ensp;&#9671; 
                    </div>
                </div>
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Hammerblade}  alt="Hammerblade" />
                    </div>
                    <div className="Paper-info">
                        <h3>A Tensor Processing Framework for CPU-Manycore Heterogeneous Systems</h3>
                        <p>Lin Cheng, Peitian Pan, Zhongyuan Zhao, Krithik Ranjan, Jack Weber, Bandhav Veluri, Borna Ehsani, Max Ruttenberg, Dai Cheol Jung, Preslav Ivanov, Dustin Richmond, Michael Taylor, Zhiru Zhang, Christopher Batten. 2022. In IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD '22).</p>
                        <a href="https://doi.org/10.1109/TCAD.2021.3103825">DOI</a>&ensp;&#9671;
                    </div>
                </div>
                <div className="Paper">
                    <div className="Paper-image">
                        <img src={Skinkit}  alt="Skinkit" />
                    </div>
                    <div className="Paper-info">
                        <h3>SkinKit: Construction Kit for On-Skin Interface Prototyping</h3>
                        <p>Pin-Sung Ku, Md. Tahmidul Islam Molla, Kunpeng Huang*, Priya Kattappurath*, Krithik Ranjan, Cindy Hsin-Liu Kao. 2021. In Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT '21).</p>
                        <a href="https://doi.org/10.1145/3494989">DOI</a>&ensp;&#9671;
                    </div>
                </div>
            </div>
        </>
    );
}