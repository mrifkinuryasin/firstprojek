import React, { useEffect, useState } from "react";
import "../public/css/style.css";

type Project = {
  id: number;
  title: string;
  description: string;
  tools: string[];
  date: string;
};

type Certificate = {
  id: number;
  image: string;
};

const ChevronDown = () => <span style={{ marginLeft: "8px" }}>▼</span>;
const ChevronUp = () => <span style={{ marginLeft: "8px" }}>▲</span>;

const Card = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <div className="custom-card" onClick={onClick}>
    {children}
  </div>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="custom-card-content">{children}</div>
);

const Button = ({
  children,
  onClick,
  variant = "default"
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "default" | "outline" | "ghost";
}) => (
  <button className={`custom-button ${variant}`} onClick={onClick}>
    {children}
  </button>
);

const Portofolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setCertificates(data.certificates);
      });
  }, []);

  return (
    <div className="portfolio-container">
      <h1 className="main-title">Portofolio Saya</h1>

      <div className="tab-buttons">
        <Button variant={activeTab === "projects" ? "default" : "outline"} onClick={() => setActiveTab("projects")}>
          Tugas / Proyek
        </Button>
        <Button variant={activeTab === "certificates" ? "default" : "outline"} onClick={() => setActiveTab("certificates")}>
          Sertifikat
        </Button>
      </div>

      {activeTab === "projects" && (
        <div className="card-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() =>
                setExpandedProjectId(expandedProjectId === project.id ? null : project.id)
              }
            >
              <CardContent>
                <h3 className="card-title">{project.title}</h3>
                {expandedProjectId === project.id ? (
                  <>
                    <p className="card-description">{project.description}</p>
                    <p className="card-meta">Tools: {project.tools.join(", ")}</p>
                    <p className="card-meta">Tanggal: {project.date}</p>
                  </>
                ) : (
                  <p className="card-description">{project.description.slice(0, 60)}...</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="card-grid">
          {certificates.map((cert) => (
            <Card key={cert.id}>
              <img src={cert.image} alt="certificate" className="certificate-image" />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portofolio;
