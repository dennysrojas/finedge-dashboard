'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  Users,
  Target,
  Compass,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Factory,
  DollarSign,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Layers,
  BookOpen,
  Briefcase,
  Printer,
  RotateCcw,
  Edit3,
  Save,
  Check,
  Upload,
  Image as ImageIcon,
  ChevronRight,
  Globe,
  UserCheck,
  Star,
  Building2,
  FileText,
  Clock,
  Shirt,
  Scale,
  Percent,
  BarChart3
} from 'lucide-react';

// Textos Oficiales extraídos de FinEdge_CORBATUL_presentacion_adaptada.html
const DEFAULT_MISSION =
  'Diseñar, producir y comercializar corbatas, bufandas y calcetines que integren calidad, diseño y funcionalidad, brindando atención cercana y precios competitivos, mediante una gestión eficiente e innovadora que genere valor para los clientes y la compañía.';

const DEFAULT_VISION =
  'Consolidar a CORBATUL como una compañía textil competitiva y reconocida por la calidad y renovación de sus accesorios, la eficiencia de sus procesos y su capacidad para generar rentabilidad y valor sostenible.';

const DEFAULT_INTERNATIONALIZATION =
  'En los Dashboards y decisiones de CORBATUL (2025 a 2029) se constata que las operaciones y distribución se concentraron en optimizar el mercado de referencia dentro de la simulación. No se realizaron aperturas fabriles en el extranjero ni expansiones geográficas no comprobadas, priorizando la recuperación de márgenes operativos, la rotación de existencias y la solvencia financiera interna antes de asumir riesgos de escala global.';

const DEFAULT_METHODOLOGY =
  'FinEdge aplicó un modelo riguroso de dirección estratégica y control de gestión causal: 1) Diagnóstico económico-financiero y operativo (2025), identificando brechas de ROE y distorsiones de costos unitarios. 2) Planificación paramétrica equilibrada entre finanzas, comercial y planta. 3) Seguimiento continuo ronda a ronda mediante cuadros de mando, conciliando métricas y ajustando precios, lotes y cobros para maximizar la creación de valor.';

const DEFAULT_TEAMWORK_IDEA_1 =
  'Gobernanza colegiada: análisis conjunto de balances, márgenes de contribución por producto y situación financiera inicial de CORBATUL.';

const DEFAULT_TEAMWORK_IDEA_2 =
  'Coordinación interfuncional: articulación permanente entre finanzas (Daniela), comercialización (Mario) y producción/operaciones (Dennis) para que cada decisión sume valor neto.';

const DEFAULT_TEAMWORK_IDEA_3 =
  'Disciplina analítica y aprendizaje: evaluación crítica de los resultados de cada ronda, control estricto de desviaciones y aprendizaje compartido en gestión empresarial.';

const DEFAULT_GLOBAL_EVALUATION =
  'La participación del equipo FinEdge en la gestión de CORBATUL dentro del 8.º Torneo Internacional de Negocios ACBSP–CompanyGame permitió articular sólidamente la formación universitaria en Finanzas con la toma de decisiones empresariales de alta exigencia.\n\nSe alcanzaron avances decisivos en la comprensión de la estructura de costos textiles, el control de inventarios y la necesidad de priorizar márgenes reales sobre volumen ciego. Se evidenció que el crecimiento comercial sólo es sostenible si se acompaña de una estricta disciplina de tesorería, cobranzas y productividad industrial.\n\nEsta experiencia consolidó las competencias analíticas, el liderazgo colaborativo y el criterio financiero del equipo, sentando bases sólidas para el ejercicio profesional directivo.';

export const ManagementReportView: React.FC = () => {
  // 1. Fotografía del equipo
  const [teamPhoto, setTeamPhoto] = useState<string>('/images/team_finedge.png');
  const [photoError, setPhotoError] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2. Filtro de integrante activo para visualización individual
  const [selectedMember, setSelectedMember] = useState<'all' | 'daniela' | 'mario' | 'dennis'>('all');

  // 3. Misión y Visión editables
  const [missionText, setMissionText] = useState<string>(DEFAULT_MISSION);
  const [isEditingMission, setIsEditingMission] = useState<boolean>(false);
  const [draftMission, setDraftMission] = useState<string>(DEFAULT_MISSION);

  const [visionText, setVisionText] = useState<string>(DEFAULT_VISION);
  const [isEditingVision, setIsEditingVision] = useState<boolean>(false);
  const [draftVision, setDraftVision] = useState<string>(DEFAULT_VISION);

  // 4. Internacionalización (Diapositiva 12 Torneo)
  const [intlText, setIntlText] = useState<string>(DEFAULT_INTERNATIONALIZATION);
  const [isEditingIntl, setIsEditingIntl] = useState<boolean>(false);
  const [draftIntl, setDraftIntl] = useState<string>(DEFAULT_INTERNATIONALIZATION);

  // 5. Metodología de gestión (Diapositiva 13 Torneo)
  const [methodologyText, setMethodologyText] = useState<string>(DEFAULT_METHODOLOGY);
  const [isEditingMethodology, setIsEditingMethodology] = useState<boolean>(false);
  const [draftMethodology, setDraftMethodology] = useState<string>(DEFAULT_METHODOLOGY);

  // 6. Trabajo en equipo (Diapositiva 14 Torneo)
  const [teamworkIdeas, setTeamworkIdeas] = useState<[string, string, string]>([
    DEFAULT_TEAMWORK_IDEA_1,
    DEFAULT_TEAMWORK_IDEA_2,
    DEFAULT_TEAMWORK_IDEA_3,
  ]);
  const [isEditingTeamwork, setIsEditingTeamwork] = useState<boolean>(false);
  const [draftTeamworkIdeas, setDraftTeamworkIdeas] = useState<[string, string, string]>([
    DEFAULT_TEAMWORK_IDEA_1,
    DEFAULT_TEAMWORK_IDEA_2,
    DEFAULT_TEAMWORK_IDEA_3,
  ]);
  const [teamworkRating, setTeamworkRating] = useState<number>(5);
  const [isEditingTeamworkRating, setIsEditingTeamworkRating] = useState<boolean>(false);
  const [draftTeamworkRating, setDraftTeamworkRating] = useState<number>(5);

  // 7. Evaluación global (Diapositiva 16 Torneo)
  const [evaluationText, setEvaluationText] = useState<string>(DEFAULT_GLOBAL_EVALUATION);
  const [isEditingEvaluation, setIsEditingEvaluation] = useState<boolean>(false);
  const [draftEvaluation, setDraftEvaluation] = useState<string>(DEFAULT_GLOBAL_EVALUATION);
  const [recommendationRating, setRecommendationRating] = useState<number>(10);
  const [isEditingRecommendation, setIsEditingRecommendation] = useState<boolean>(false);
  const [draftRecommendation, setDraftRecommendation] = useState<number>(10);

  // Persistencia con localStorage
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('finedge_team_photo');
      if (savedPhoto) setTeamPhoto(savedPhoto);

      const savedMission = localStorage.getItem('finedge_company_mission');
      if (savedMission) {
        setMissionText(savedMission);
        setDraftMission(savedMission);
      }

      const savedVision = localStorage.getItem('finedge_company_vision');
      if (savedVision) {
        setVisionText(savedVision);
        setDraftVision(savedVision);
      }

      const savedIntl = localStorage.getItem('finedge_internationalization_text');
      if (savedIntl) {
        setIntlText(savedIntl);
        setDraftIntl(savedIntl);
      }

      const savedMethodology = localStorage.getItem('finedge_methodology_text');
      if (savedMethodology) {
        setMethodologyText(savedMethodology);
        setDraftMethodology(savedMethodology);
      }

      const savedTeamwork = localStorage.getItem('finedge_teamwork_ideas');
      if (savedTeamwork) {
        const parsed = JSON.parse(savedTeamwork);
        if (Array.isArray(parsed) && parsed.length === 3) {
          setTeamworkIdeas(parsed as [string, string, string]);
          setDraftTeamworkIdeas(parsed as [string, string, string]);
        }
      }

      const savedTeamworkRating = localStorage.getItem('finedge_teamwork_rating');
      if (savedTeamworkRating) {
        const num = parseFloat(savedTeamworkRating);
        if (!isNaN(num) && num >= 1 && num <= 5) {
          setTeamworkRating(num);
          setDraftTeamworkRating(num);
        }
      }

      const savedEval = localStorage.getItem('finedge_global_evaluation_text');
      if (savedEval) {
        setEvaluationText(savedEval);
        setDraftEvaluation(savedEval);
      }

      const savedRecRating = localStorage.getItem('finedge_recommendation_rating');
      if (savedRecRating) {
        const num = parseFloat(savedRecRating);
        if (!isNaN(num) && num >= 1 && num <= 10) {
          setRecommendationRating(num);
          setDraftRecommendation(num);
        }
      }
    } catch {
      // Ignorar restricciones en entornos aislados
    }
  }, []);

  // Manejo de carga de foto
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processPhotoFile(file);
  };

  const processPhotoFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (result) {
        setTeamPhoto(result);
        setPhotoError(false);
        try {
          localStorage.setItem('finedge_team_photo', result);
        } catch {}
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processPhotoFile(file);
    }
  };

  const handleResetPhoto = () => {
    const defaultPath = '/images/team_finedge.png';
    setTeamPhoto(defaultPath);
    setPhotoError(false);
    try {
      localStorage.removeItem('finedge_team_photo');
    } catch {}
  };

  const handleResetAllToOfficial = () => {
    if (window.confirm('¿Desea restablecer todos los textos y contenidos a los originales de la presentación de FinEdge?')) {
      setMissionText(DEFAULT_MISSION);
      setDraftMission(DEFAULT_MISSION);
      setVisionText(DEFAULT_VISION);
      setDraftVision(DEFAULT_VISION);
      setIntlText(DEFAULT_INTERNATIONALIZATION);
      setDraftIntl(DEFAULT_INTERNATIONALIZATION);
      setMethodologyText(DEFAULT_METHODOLOGY);
      setDraftMethodology(DEFAULT_METHODOLOGY);
      setTeamworkIdeas([DEFAULT_TEAMWORK_IDEA_1, DEFAULT_TEAMWORK_IDEA_2, DEFAULT_TEAMWORK_IDEA_3]);
      setDraftTeamworkIdeas([DEFAULT_TEAMWORK_IDEA_1, DEFAULT_TEAMWORK_IDEA_2, DEFAULT_TEAMWORK_IDEA_3]);
      setTeamworkRating(5);
      setDraftTeamworkRating(5);
      setEvaluationText(DEFAULT_GLOBAL_EVALUATION);
      setDraftEvaluation(DEFAULT_GLOBAL_EVALUATION);
      setRecommendationRating(10);
      setDraftRecommendation(10);
      handleResetPhoto();
      try {
        localStorage.removeItem('finedge_company_mission');
        localStorage.removeItem('finedge_company_vision');
        localStorage.removeItem('finedge_internationalization_text');
        localStorage.removeItem('finedge_methodology_text');
        localStorage.removeItem('finedge_teamwork_ideas');
        localStorage.removeItem('finedge_teamwork_rating');
        localStorage.removeItem('finedge_global_evaluation_text');
        localStorage.removeItem('finedge_recommendation_rating');
      } catch {}
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16 animate-fadeIn text-slate-steel">
      
      {/* ========================================================
          0. HERO HEADER INSTITUCIONAL: TORNEO & INSTITUCIÓN
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase font-bold bg-blush-100 text-rosewood-dark border border-blush-200">
                8.º Torneo Internacional de Simulación · ACBSP & CompanyGame
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-mineral-100 text-slate-steel-dark border border-mineral/30">
                Informe de Gestión Oficial · FinEdge × CORBATUL
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rosewood-light text-rosewood border border-rosewood-200">
                Punto de Partida: 2025
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-mineral-100 text-slate-steel border border-mineral/40">
                Moneda: € (Euros · España)
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-slate-steel-900 tracking-tight">
              Presentación Adaptada · Equipo FinEdge
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-steel/80 max-w-3xl leading-relaxed">
              Diagnóstico económico-financiero, articulación de roles de gestión, dirección estratégica, metas cuantitativas y plan de actuación integral para fortalecer los márgenes y la creación de valor en <strong>CORBATUL</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-slate-steel/70">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-rosewood" />
                <span>ESPOCH — FADE (Carrera de Finanzas)</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-rosewood" />
                <span>Acreditación ACBSP Global Business</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {/* Badges Oficiales del Torneo */}
            <div className="flex items-center gap-3 bg-mineral-50 p-2.5 rounded-2xl border border-mineral/30 shadow-2xs">
              <img
                src="/images/banner_torneo_acbsp.jpeg"
                alt="Banner 8vo Torneo ACBSP CompanyGame"
                className="h-12 w-auto object-contain rounded-md"
              />
              <div className="h-10 w-[1px] bg-mineral/40" />
              <img
                src="/images/logo_acbsp_companygame_badges.jpeg"
                alt="Logo ACBSP y CompanyGame"
                className="h-12 w-auto object-contain rounded-md"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl bg-slate-steel text-white font-bold text-xs shadow-minimal hover:bg-slate-steel-dark transition-all flex items-center gap-2 cursor-pointer"
                title="Imprimir presentación o guardar en PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Exportar PDF</span>
              </button>
              <button
                onClick={handleResetAllToOfficial}
                className="px-3 py-2.5 rounded-xl border border-mineral/40 text-slate-steel/70 hover:text-slate-steel hover:bg-mineral-100 font-medium text-xs transition-colors flex items-center gap-1.5"
                title="Restablecer textos por defecto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Restablecer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          1. SECCIÓN 01: IDENTIDAD DEL EQUIPO & FOTOGRAFÍA OFICIAL
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-rosewood text-white flex items-center justify-center text-xs font-black shadow-xs">
              01
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Presentación de FinEdge e Identidad del Equipo
              </h2>
              <p className="text-xs text-slate-steel/60">
                Fotografía oficial con credencial universitaria de Finanzas ESPOCH
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold text-slate-steel bg-mineral-100 px-3 py-1 rounded-full border border-mineral/30">
            Equipo: FinEdge · Compañía: CORBATUL
          </span>
        </div>

        {/* Declaración de Identidad */}
        <div className="p-4 rounded-2xl bg-mineral-50/70 border border-mineral/30 text-xs sm:text-sm leading-relaxed text-slate-steel-900">
          <p>
            Somos <strong>FinEdge</strong>, un equipo de gestión enfocado en el análisis financiero, la toma de decisiones estratégicas y la generación de resultados sostenibles para <strong>CORBATUL</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Fotografía Oficial con Drag & Drop */}
          <div className="lg:col-span-7 space-y-3">
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`relative rounded-2xl border-2 overflow-hidden shadow-minimal-md transition-all ${
                isDragOver ? 'border-rosewood ring-4 ring-blush-100' : 'border-mineral/50 bg-mineral-50'
              }`}
            >
              {teamPhoto && !photoError ? (
                <div className="relative group">
                  <img
                    src={teamPhoto}
                    alt="Fotografía oficial del equipo FinEdge con identidad de Finanzas ESPOCH"
                    onError={() => setPhotoError(true)}
                    className="w-full h-auto max-h-[480px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-steel-900/90 via-slate-steel-900/50 to-transparent p-4 sm:p-5 text-white">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-blush font-bold block">
                          Equipo Directivo FinEdge
                        </span>
                        <h4 className="text-base font-bold text-white">
                          CORBATUL · Simulación Textil
                        </h4>
                        <p className="text-xs text-mineral-200 font-medium mt-0.5">
                          Daniela Paola García &bull; Mario Fernando Gadvay &bull; Dennis Sebastián Galarza
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-rosewood text-white font-bold tracking-wider uppercase shrink-0">
                        Carrera de Finanzas
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-mineral-100 border border-mineral/40 mx-auto flex items-center justify-center text-slate-steel shadow-minimal">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-steel-900">
                      Fotografía del Equipo FinEdge
                    </h4>
                    <p className="text-xs text-slate-steel/60 max-w-sm mx-auto mt-1">
                      Arrastre y suelte una fotografía del equipo aquí o cárguela con el botón inferior.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Controles para cambiar la foto */}
            <div className="flex items-center justify-between gap-2 text-xs pt-1">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-lg border border-mineral/40 bg-white hover:bg-mineral-50 text-slate-steel font-medium transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-rosewood" />
                <span>Actualizar fotografía</span>
              </button>

              {teamPhoto !== '/images/team_finedge.png' && (
                <button
                  onClick={handleResetPhoto}
                  className="px-3 py-1.5 rounded-lg text-slate-steel/70 hover:text-rosewood transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Foto original</span>
                </button>
              )}
            </div>
          </div>

          {/* Tarjetas de los 3 Integrantes de FinEdge */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel/70">
                Integrantes y Roles de Gestión
              </h3>
              <span className="text-[10px] font-mono text-rosewood font-medium">3 Gestores</span>
            </div>

            {/* 1. Daniela Paola García Romero */}
            <div
              onClick={() => setSelectedMember(selectedMember === 'daniela' ? 'all' : 'daniela')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedMember === 'daniela'
                  ? 'border-rosewood bg-rosewood-light/40 shadow-minimal'
                  : 'border-mineral/30 bg-mineral-50/50 hover:bg-mineral-50 hover:border-mineral/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rosewood/15 text-rosewood font-black flex items-center justify-center font-mono text-xs">
                    DG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-steel-900">
                      Daniela Paola García Romero
                    </h4>
                    <span className="text-xs font-mono text-rosewood font-medium block">
                      Dirección Financiera & Control de Gestión
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel">
                  Finanzas
                </span>
              </div>
              <p className="text-xs text-slate-steel/80 mt-2.5 leading-relaxed">
                Diagnóstico de rentabilidad, liquidez y solvencia; análisis de brechas del ROE y asignación eficiente de recursos de capital.
              </p>
              <div className="mt-2.5 pt-2 border-t border-mineral/20 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-steel/70">
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Margen 32,5%</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">ROE −2,6%</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Ingresos 3,35 M€</span>
              </div>
            </div>

            {/* 2. Mario Fernando Gadvay Galarza */}
            <div
              onClick={() => setSelectedMember(selectedMember === 'mario' ? 'all' : 'mario')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedMember === 'mario'
                  ? 'border-slate-steel bg-slate-steel-light/50 shadow-minimal'
                  : 'border-mineral/30 bg-mineral-50/50 hover:bg-mineral-50 hover:border-mineral/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-steel/15 text-slate-steel font-black flex items-center justify-center font-mono text-xs">
                    MG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-steel-900">
                      Mario Fernando Gadvay Galarza
                    </h4>
                    <span className="text-xs font-mono text-slate-steel font-medium block">
                      Estrategia Comercial & Marketing
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel">
                  Comercial
                </span>
              </div>
              <p className="text-xs text-slate-steel/80 mt-2.5 leading-relaxed">
                Posicionamiento de las tres líneas textiles, precios paramétricos, canales digitales, cobertura y retorno de inversión promocional.
              </p>
              <div className="mt-2.5 pt-2 border-t border-mineral/20 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-steel/70">
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Cobertura 57% → 72%</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Marca 36 → 45</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Ventas 3,76 M€</span>
              </div>
            </div>

            {/* 3. Dennis Sebastián Galarza Lagua */}
            <div
              onClick={() => setSelectedMember(selectedMember === 'dennis' ? 'all' : 'dennis')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedMember === 'dennis'
                  ? 'border-mineral-500 bg-mineral-100/60 shadow-minimal'
                  : 'border-mineral/30 bg-mineral-50/50 hover:bg-mineral-50 hover:border-mineral/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mineral/30 text-slate-steel-dark font-black flex items-center justify-center font-mono text-xs">
                    DG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-steel-900">
                      Dennis Sebastián Galarza Lagua
                    </h4>
                    <span className="text-xs font-mono text-slate-steel-dark font-medium block">
                      Producción, Operaciones & Eficiencia
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel">
                  Operaciones
                </span>
              </div>
              <p className="text-xs text-slate-steel/80 mt-2.5 leading-relaxed">
                Control de costos unitarios de fabricación, abastecimiento de materia prima, inventarios terminados y modernización de activos.
              </p>
              <div className="mt-2.5 pt-2 border-t border-mineral/20 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-steel/70">
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Calcetines 153% costo</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Ocupación &gt;87%</span>
                <span className="bg-white px-2 py-0.5 rounded border border-mineral/30">Inventario &lt;2,5%</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-mineral/30 text-[11px] font-mono text-slate-steel/70 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rosewood shrink-0" />
              <span>
                <strong>Mensaje conjunto:</strong> FinEdge articula finanzas, comercialización y operaciones para que cada decisión incremente el valor de CORBATUL.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECCIÓN 02 & 02B: PUNTO DE PARTIDA & DIAGNÓSTICO INICIAL (2025)
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-slate-steel text-white flex items-center justify-center text-xs font-black shadow-xs">
              02
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Punto de Partida: ¿Quién es CORBATUL? y Diagnóstico Inicial 2025
              </h2>
              <p className="text-xs text-slate-steel/60">
                Contexto competitivo de la compañía textil tradicional y análisis de la situación de partida
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-rosewood bg-rosewood-light px-3 py-1 rounded-full border border-rosewood-200">
            Diagnóstico 2025
          </span>
        </div>

        {/* Narrativa de contexto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-2">
            <div className="flex items-center gap-2 text-rosewood font-bold text-xs uppercase font-mono tracking-wider">
              <Shirt className="w-4 h-4" />
              <span>3 Líneas de Accesorios</span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Corbatas, Bufandas y Calcetines</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Las <strong>corbatas</strong> constituyen su núcleo de ingresos y margen (~80% ingresos, ~84% margen). Las <strong>bufandas</strong> y <strong>calcetines</strong> tienen potencial pero exigen control urgente de costos y producción.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-2">
            <div className="flex items-center gap-2 text-slate-steel font-bold text-xs uppercase font-mono tracking-wider">
              <TrendingDown className="w-4 h-4" />
              <span>Presión en Costos y ROE</span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Ingresos 3,35 M€ pero ROE Negativo</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              El diagnóstico de 2025 muestra ingresos crecientes pero fuerte presión en costo de ventas y rentabilidad insuficiente: <strong>ROE de −2,6%</strong> (meta) / <strong>−3,1%</strong> (narrativa).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-2">
            <div className="flex items-center gap-2 text-mineral-600 font-bold text-xs uppercase font-mono tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Prioridad Estratégica</span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Recuperar Márgenes Primero</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              La prioridad no es crecer a cualquier costo: primero recuperar el margen unitario, acortar el ciclo de cobro y fortalecer la productividad; después escalar las ventas rentables.
            </p>
          </div>
        </div>

        {/* Diagnóstico Detallado en Dos Columnas: Financiero vs Productivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          
          {/* Columna Financiera */}
          <div className="p-5 rounded-2xl border border-rosewood-200 bg-rosewood-light/20 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rosewood-dark flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-rosewood" />
                <span>Situación Económico-Financiera Inicial</span>
              </h4>
              <span className="text-[10px] font-mono text-rosewood font-bold">2025</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-steel-900">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>Ingresos iniciales:</strong> 3.346.747 € con un <strong>Margen sobre ingresos del 32,5%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>ROE negativo:</strong> −2,6% en la tabla de metas y −3,1% en la narrativa del diagnóstico inicial (pendiente de conciliación).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>Liquidez vs Ratios:</strong> Liquidez del 495,1% en tabla de metas; ratio corriente de 2,02 y prueba ácida de 1,82 en el diagnóstico.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>Desfase de capital de trabajo:</strong> Cobros a 46 días frente a pagos a 33 días = <strong>desfase negativo de 13 días</strong> en tesorería.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>ROA:</strong> 3,5% según diagnóstico, mostrando rendimiento positivo de activos pero insuficiente retorno patrimonial.
                </span>
              </li>
            </ul>
          </div>

          {/* Columna Competitiva y Productiva */}
          <div className="p-5 rounded-2xl border border-slate-steel-200 bg-slate-steel-light/30 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel-dark flex items-center gap-2">
                <Factory className="w-4 h-4 text-slate-steel" />
                <span>Situación Competitiva y Productiva</span>
              </h4>
              <span className="text-[10px] font-mono text-slate-steel font-bold">2025</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-steel-900">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-steel shrink-0 mt-0.5" />
                <span>
                  <strong>Corbatas:</strong> Aportan el ~80% de los ingresos y el 84% del margen bruto (concentración comercial alta).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-slate-steel shrink-0 mt-0.5" />
                <span>
                  <strong>Bufandas:</strong> El margen cayó del 46% al 35% por encarecimiento de materias primas y procesos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rosewood shrink-0 mt-0.5" />
                <span>
                  <strong>Calcetines:</strong> Costos totales equivalentes al <strong>153% de los ingresos</strong> (línea deficitaria que destruye margen).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-steel shrink-0 mt-0.5" />
                <span>
                  <strong>Mercado:</strong> Valoración de marca 36/100, diseño del producto 7,1/10 y cobertura de distribución del 57%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-steel shrink-0 mt-0.5" />
                <span>
                  <strong>Trayectoria:</strong> 45 años de historia, clientela fidelizada y capacidad de sinergia fabril.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECCIÓN 03: INDICADORES DE REFERENCIA · 2025
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-mineral-500 text-white flex items-center justify-center text-xs font-black shadow-xs">
              03
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Datos Históricos: Indicadores de Referencia (2025)
              </h2>
              <p className="text-xs text-slate-steel/60">
                Valores de partida oficiales para calibrar las metas de la simulación
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-steel/70">Línea Base</span>
        </div>

        {/* 4 Métricas Clave */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-mineral/40 shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-steel/60 block">Margen sobre Ingresos</span>
            <div className="text-2xl font-black text-slate-steel-900 mt-1">32,5%</div>
            <span className="text-[11px] text-slate-steel/70 mt-0.5 block">Línea base 2025</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-mineral/40 shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-steel/60 block">Ingresos Totales</span>
            <div className="text-2xl font-black text-slate-steel-900 mt-1">3.346.747 €</div>
            <span className="text-[11px] text-slate-steel/70 mt-0.5 block">Ventas brutas CORBATUL</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-rosewood-200 bg-rosewood-light/30 shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-rosewood-dark block">ROE (Meta Inicial)</span>
            <div className="text-2xl font-black text-rosewood mt-1">−2,6%</div>
            <span className="text-[11px] text-rosewood-dark mt-0.5 block">Narrativa reporta −3,1%</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-mineral/40 shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-steel/60 block">Ratio de Liquidez</span>
            <div className="text-2xl font-black text-slate-steel-900 mt-1">495,1%</div>
            <span className="text-[11px] text-slate-steel/70 mt-0.5 block">R. Corriente 2,02 · Ácida 1,82</span>
          </div>
        </div>

        {/* Tabla Completa de Referencia */}
        <div className="overflow-x-auto rounded-2xl border border-mineral/30">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-mineral-100/70 border-b border-mineral/30 text-slate-steel-dark font-mono font-bold uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4">Indicador</th>
                <th className="py-3 px-4">Dato de Referencia (2025)</th>
                <th className="py-3 px-4">Significado Estratégico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mineral/20 text-slate-steel-900 bg-white">
              <tr>
                <td className="py-2.5 px-4 font-medium">Margen sobre ingresos</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">32,5%</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Corbatas aportan el 84% del margen bruto</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-2.5 px-4 font-medium">Ingresos de explotación</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">3.346.747 €</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Base de facturación a expandir hacia 3,76 M€</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium">Rentabilidad sobre patrimonio (ROE)</td>
                <td className="py-2.5 px-4 font-mono font-bold text-rosewood">−2,6%</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Objetivo del plan: llevar a +2,0% en período 3</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-2.5 px-4 font-medium">Ratio de liquidez (valor del plan)</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">495,1%</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Solvencia de corto plazo sin tensiones críticas</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium">Cobertura de distribución</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">57%</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Presencia en tiendas y canales a elevar al 72%</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-2.5 px-4 font-medium">Valoración de marca</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">36 / 100</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Espacio de mejora en marketing para alcanzar 45/100</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium">Diseño del producto</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">7,1 / 10</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Percepción sólida de calidad en accesorios masculinos</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-2.5 px-4 font-medium">ROA indicado en el diagnóstico</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">3,5%</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Rendimiento operativo de los activos de planta</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium">Prueba ácida en diagnóstico</td>
                <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">1,82</td>
                <td className="py-2.5 px-4 text-slate-steel/70">Capacidad de pago inmediata excluyendo existencias</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-xl bg-mineral-100/60 border border-mineral/30 text-xs text-slate-steel/70 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-rosewood shrink-0 mt-0.5" />
          <span>
            <strong>Nota de consistencia metodológica:</strong> El diagnóstico narrativo también menciona ROE de −3,1% y ratio corriente de 2,02. Para esta ficha oficial se conservan los valores de la tabla de objetivos del plan (ROE −2,6% y liquidez 495,1%), recomendando conciliar ambos registros en la defensa oral.
          </span>
        </div>
      </section>

      {/* ========================================================
          4. SECCIÓN 04: DIRECCIÓN ESTRATÉGICA (MISIÓN Y VISIÓN)
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-rosewood text-white flex items-center justify-center text-xs font-black shadow-xs">
              04
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Dirección Estratégica: Misión y Visión Propuestas para CORBATUL
              </h2>
              <p className="text-xs text-slate-steel/60">
                Propuestas redactadas por el equipo FinEdge para guiar la gestión
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-steel/60">Propuesta FinEdge</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Misión */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rosewood flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>Misión de CORBATUL</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingMission) {
                    setMissionText(draftMission);
                    setIsEditingMission(false);
                    try { localStorage.setItem('finedge_company_mission', draftMission); } catch {}
                  } else {
                    setDraftMission(missionText);
                    setIsEditingMission(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-rosewood transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingMission ? <Check className="w-3.5 h-3.5 text-rosewood" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingMission ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {isEditingMission ? (
              <textarea
                value={draftMission}
                onChange={(e) => setDraftMission(e.target.value)}
                rows={4}
                className="w-full text-xs font-sans p-3 rounded-xl border border-rosewood bg-white text-slate-steel-900 focus:outline-none focus:ring-2 focus:ring-blush"
              />
            ) : (
              <p className="text-xs sm:text-sm text-slate-steel-900 leading-relaxed font-serif italic">
                &ldquo;{missionText}&rdquo;
              </p>
            )}

            <div className="text-[10px] font-mono text-slate-steel/50">
              * Propuesta del equipo FinEdge orientada a diseño, eficiencia e innovación.
            </div>
          </div>

          {/* Visión */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Visión de CORBATUL</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingVision) {
                    setVisionText(draftVision);
                    setIsEditingVision(false);
                    try { localStorage.setItem('finedge_company_vision', draftVision); } catch {}
                  } else {
                    setDraftVision(visionText);
                    setIsEditingVision(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-slate-steel-dark transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingVision ? <Check className="w-3.5 h-3.5 text-slate-steel" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingVision ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {isEditingVision ? (
              <textarea
                value={draftVision}
                onChange={(e) => setDraftVision(e.target.value)}
                rows={4}
                className="w-full text-xs font-sans p-3 rounded-xl border border-slate-steel bg-white text-slate-steel-900 focus:outline-none focus:ring-2 focus:ring-slate-steel-200"
              />
            ) : (
              <p className="text-xs sm:text-sm text-slate-steel-900 leading-relaxed font-serif italic">
                &ldquo;{visionText}&rdquo;
              </p>
            )}

            <div className="text-[10px] font-mono text-slate-steel/50">
              * Propuesta de posicionamiento competitivo, eficiencia de procesos y valor sostenible.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECCIÓN 06A & 06B: EVALUACIÓN DE FORTALEZAS & BRECHAS
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-slate-steel text-white flex items-center justify-center text-xs font-black shadow-xs">
              05
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Evaluación del Diagnóstico: Fortalezas y Brechas frente a las Metas
              </h2>
              <p className="text-xs text-slate-steel/60">
                Puntos de apoyo existentes (2025) y brechas cuantitativas que CORBATUL debe cerrar
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-steel bg-mineral-100 px-3 py-1 rounded-full border border-mineral/30">
            Fortalezas vs Metas
          </span>
        </div>

        {/* Fortalezas Identificadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-mineral-50/50 border border-mineral/30 space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-steel flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Base Económica y Comercial</span>
            </h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Ventas de <strong>3.346.747 €</strong> con margen del <strong>32,5%</strong>. La línea de corbatas aporta el 80% de ingresos y 84% de margen. Red de distribución con cobertura del <strong>57%</strong> y diseño de <strong>7,1/10</strong> como palancas para diferenciar la oferta.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-mineral-50/50 border border-mineral/30 space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-steel flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Capacidad Financiera y Trayectoria</span>
            </h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Ratio corriente de <strong>2,02</strong> y prueba ácida de <strong>1,82</strong> reflejan solvencia de corto plazo. <strong>ROA de 3,5%</strong> y <strong>45 años de historia</strong> con relaciones comerciales consolidadas y sinergias fabriles.
            </p>
          </div>
        </div>

        {/* Tabla Cuantitativa de Brechas frente a Metas (06B) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel-900">
              Matriz de Brechas Cuantitativas (Valor Inicial vs Meta Período 3)
            </h3>
            <span className="text-[10px] font-mono text-rosewood font-bold">Trayectoria 2025–2028</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-mineral/30">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-mineral-100/70 border-b border-mineral/30 text-slate-steel-dark font-mono font-bold uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Indicador</th>
                  <th className="py-3 px-4">Valor Inicial (2025)</th>
                  <th className="py-3 px-4">Meta Período 3 (2028)</th>
                  <th className="py-3 px-4">Brecha por Cerrar</th>
                  <th className="py-3 px-4">Acción Estratégica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mineral/20 text-slate-steel-900 bg-white">
                <tr>
                  <td className="py-2.5 px-4 font-bold">Margen sobre ingresos</td>
                  <td className="py-2.5 px-4 font-mono">32,5%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">35,5%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+3,0 pp</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Ajuste de precios + control de costes en bufandas/calcetines</td>
                </tr>
                <tr className="bg-mineral-50/30">
                  <td className="py-2.5 px-4 font-bold">Ingresos de explotación</td>
                  <td className="py-2.5 px-4 font-mono">3.346.747 €</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">3.764.000 €</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+417.253 €</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Expansión de cobertura comercial y ventas en línea</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">Rentabilidad del patrimonio (ROE)</td>
                  <td className="py-2.5 px-4 font-mono text-rosewood">−2,6%*</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">2,0%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+4,6 pp</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Superar el punto de equilibrio y generar beneficio neto</td>
                </tr>
                <tr className="bg-mineral-50/30">
                  <td className="py-2.5 px-4 font-bold">Ratio de liquidez</td>
                  <td className="py-2.5 px-4 font-mono">495,1%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">520,0%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+24,9 pp</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Alineación de cobros (38d) y pagos (40-45d)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">Cobertura de distribución</td>
                  <td className="py-2.5 px-4 font-mono">57%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">72%</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+15 pp</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Ampliación de puntos de venta y canal digital</td>
                </tr>
                <tr className="bg-mineral-50/30">
                  <td className="py-2.5 px-4 font-bold">Valoración de marca</td>
                  <td className="py-2.5 px-4 font-mono">36 / 100</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">45 / 100</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">+9 pts</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Inversión promocional enfocada en calidad y diseño</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">Valor de la compañía</td>
                  <td className="py-2.5 px-4 font-mono text-slate-steel/60">Base de inicio</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-steel">+7% por ciclo</td>
                  <td className="py-2.5 px-4 font-mono font-bold text-emerald-600">Crecimiento</td>
                  <td className="py-2.5 px-4 text-slate-steel/70">Eficiencia fabril, reducción de deuda y rentabilidad neta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Diagnóstico Causal de Brechas Específicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-rosewood-light/30 border border-rosewood-200 text-xs space-y-1">
            <span className="font-bold text-rosewood-dark block">Rentabilidad por Producto</span>
            <p className="text-slate-steel-900 leading-relaxed">
              Bufandas cayeron de 46% a 35% de margen; calcetines tienen costos de 153% de ingresos. Urge corregir precios y optimizar materias primas.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-mineral-50 border border-mineral/30 text-xs space-y-1">
            <span className="font-bold text-slate-steel-900 block">Modernización de Planta</span>
            <p className="text-slate-steel/80 leading-relaxed">
              Procesos tradicionales demandan mantenimiento preventivo, digitalización e indicadores en tiempo real de mermas y desperdicios.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-mineral-50 border border-mineral/30 text-xs space-y-1">
            <span className="font-bold text-slate-steel-900 block">Capital de Trabajo</span>
            <p className="text-slate-steel/80 leading-relaxed">
              Cobros a 46 días vs pagos a 33 días genera desfase. La meta es acortar cobro a 38 días y negociar crédito a proveedores a 40–45 días.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SECCIÓN 06: METAS CUANTIFICABLES POR PERÍODO
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-rosewood text-white flex items-center justify-center text-xs font-black shadow-xs">
              06
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Trayectoria Objetivo: Metas Cuantificables Período por Período
              </h2>
              <p className="text-xs text-slate-steel/60">
                Evolución paramétrica planificada para CORBATUL en los tres períodos de la simulación
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-steel/70">Plan de Metas</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-mineral/30">
          <table className="w-full text-center text-xs font-sans">
            <thead className="bg-mineral-100/70 border-b border-mineral/30 text-slate-steel-dark font-mono font-bold uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4 text-left">Indicador</th>
                <th className="py-3 px-4 bg-mineral-200/50">Inicial (2025)</th>
                <th className="py-3 px-4">Período 1 (2026)</th>
                <th className="py-3 px-4">Período 2 (2027)</th>
                <th className="py-3 px-4 bg-blush-100/60 font-black text-rosewood-dark">Período 3 (2028)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mineral/20 text-slate-steel-900 bg-white">
              <tr>
                <td className="py-3 px-4 text-left font-bold">Margen sobre ingresos</td>
                <td className="py-3 px-4 font-mono font-semibold bg-mineral-50/50">32,5%</td>
                <td className="py-3 px-4 font-mono">33,5%</td>
                <td className="py-3 px-4 font-mono">34,5%</td>
                <td className="py-3 px-4 font-mono font-bold text-rosewood bg-blush-100/30">35,5%</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-3 px-4 text-left font-bold">Ingresos de explotación</td>
                <td className="py-3 px-4 font-mono font-semibold bg-mineral-100/30">3.346.747 €</td>
                <td className="py-3 px-4 font-mono">3.447.000 €</td>
                <td className="py-3 px-4 font-mono">3.585.000 €</td>
                <td className="py-3 px-4 font-mono font-bold text-slate-steel bg-blush-100/30">3.764.000 €</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left font-bold">Rentabilidad sobre patrimonio (ROE)</td>
                <td className="py-3 px-4 font-mono font-semibold text-rosewood bg-mineral-50/50">−2,6%</td>
                <td className="py-3 px-4 font-mono text-rosewood-dark">−1,5%</td>
                <td className="py-3 px-4 font-mono text-slate-steel">0,0%</td>
                <td className="py-3 px-4 font-mono font-bold text-emerald-600 bg-blush-100/30">2,0%</td>
              </tr>
              <tr className="bg-mineral-50/30">
                <td className="py-3 px-4 text-left font-bold">Ratio de liquidez</td>
                <td className="py-3 px-4 font-mono font-semibold bg-mineral-100/30">495,1%</td>
                <td className="py-3 px-4 font-mono">500,0%</td>
                <td className="py-3 px-4 font-mono">510,0%</td>
                <td className="py-3 px-4 font-mono font-bold text-slate-steel bg-blush-100/30">520,0%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-left font-bold">Cobertura de distribución</td>
                <td className="py-3 px-4 font-mono font-semibold bg-mineral-50/50">57%</td>
                <td className="py-3 px-4 font-mono">62%</td>
                <td className="py-3 px-4 font-mono">67%</td>
                <td className="py-3 px-4 font-mono font-bold text-slate-steel bg-blush-100/30">72%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================================
          7. SECCIÓN 07A & 07B: PLAN OPERATIVO Y HOJA DE RUTA
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-slate-steel text-white flex items-center justify-center text-xs font-black shadow-xs">
              07
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Plan de Actuación Operativo, Medible y Hoja de Ruta
              </h2>
              <p className="text-xs text-slate-steel/60">
                6 programas de gestión con métricas de seguimiento y coordinación por integrante
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-rosewood bg-rosewood-light px-3 py-1 rounded-full border border-rosewood-200">
            6 Programas
          </span>
        </div>

        {/* 6 Programas Operativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Programa 1: Rentabilidad y Precios */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-rosewood/15 text-rosewood text-xs font-bold flex items-center justify-center font-mono">
                  1
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-rosewood font-bold">
                  Daniela & Mario
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Rentabilidad y Precios</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Calcular margen de contribución por referencia; revisar precios de bufandas y calcetines en el rango propuesto de 2%–3%, sujeto a elasticidad; proteger corbatas y eliminar ventas estructuralmente deficitarias.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> Margen 32,5% → 33,5% → 34,5% → 35,5%.
            </div>
          </div>

          {/* Programa 2: Marketing y Distribución */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-slate-steel/15 text-slate-steel text-xs font-bold flex items-center justify-center font-mono">
                  2
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel font-bold">
                  Mario Fernando
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Marketing y Distribución</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Priorizar canales con contribución positiva; evaluar descuentos e incentivos; campañas digitales centradas en calidad y diseño; medir ventas adicionales frente a inversión promocional.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> Cobertura 57% → 72%; Marca 36 → 45/100.
            </div>
          </div>

          {/* Programa 3: Producción y Abastecimiento */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-mineral/40 text-slate-steel-dark text-xs font-bold flex items-center justify-center font-mono">
                  3
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel-dark font-bold">
                  Dennis Sebastián
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Producción y Abastecimiento</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Programar lotes según demanda; negociar descuentos por volumen sin sobrestock; comparar proveedores estándar/premium; mantenimiento preventivo y control de desperdicios en planta.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> Inventario &lt;2,5% ventas; Ocupación bufandas &gt;87%.
            </div>
          </div>

          {/* Programa 4: Tesorería y Financiación */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-rosewood/15 text-rosewood text-xs font-bold flex items-center justify-center font-mono">
                  4
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-rosewood font-bold">
                  Daniela Paola
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Tesorería y Financiación</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Segmentar cuentas por cobrar; acortar cobro de 46 a 38 días; negociar pago de 33 a 40–45 días; amortizar deuda costosa y evitar financiación extraordinaria penalizadora.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> Días cobro (38d), días pago (40-45d), ROE (2% en P3).
            </div>
          </div>

          {/* Programa 5: Tecnología y Gobierno de Datos */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-slate-steel/15 text-slate-steel text-xs font-bold flex items-center justify-center font-mono">
                  5
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel font-bold">
                  Los 3 Gestores
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Tecnología y Gobierno de Datos</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Tablero analítico por producto y área; registro de precios, costes y demanda; conciliación de contradicciones métricas; comités de revisión al finalizar cada ronda.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> Tablero actualizado, variaciones vs meta documentadas.
            </div>
          </div>

          {/* Programa 6: Inversión y Activos */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-lg bg-mineral/40 text-slate-steel-dark text-xs font-bold flex items-center justify-center font-mono">
                  6
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-mineral/30 text-slate-steel-dark font-bold">
                  Daniela & Dennis
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Inversión y Activos</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Evaluar modernización y digitalización por ahorro esperado y período de recuperación; desinvertir en activos improductivos para amortizar deuda a largo plazo.
              </p>
            </div>
            <div className="pt-2 border-t border-mineral/20 text-[11px] font-mono text-slate-steel/70">
              <strong>Seguimiento:</strong> VAN positivo, liquidez residual y valor compañía (+7%/ciclo).
            </div>
          </div>
        </div>

        {/* Hoja de Ruta de los 3 Períodos */}
        <div className="pt-4 border-t border-mineral/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel-900">
              Hoja de Ruta Estratégica en Tres Etapas
            </h3>
            <span className="text-[10px] font-mono text-slate-steel/60">Ciclos Causales</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* P1 */}
            <div className="p-5 rounded-2xl border border-rosewood-200 bg-rosewood-light/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rosewood uppercase">Período 1 · 2026</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-rosewood-200 text-rosewood-dark font-bold">Corregir</span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Estabilizar Márgenes y Caja</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Revisar costes y precios paramétricos, definir mezcla rentable, ordenar existencias y ajustar políticas de cobranza inmediata.
              </p>
              <div className="text-[11px] font-mono text-slate-steel/70 pt-1 border-t border-rosewood-200">
                Metas: Margen 33,5% · Ventas 3,45 M€ · ROE −1,5% · Cobertura 62%
              </div>
            </div>

            {/* P2 */}
            <div className="p-5 rounded-2xl border border-slate-steel-200 bg-slate-steel-light/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-steel uppercase">Período 2 · 2027</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-steel-200 text-slate-steel font-bold">Consolidar</span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Escalar lo Rentable</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Ampliar canales eficientes, profundizar mejoras productivas en telar y controlar rigurosamente el retorno promocional.
              </p>
              <div className="text-[11px] font-mono text-slate-steel/70 pt-1 border-t border-slate-steel-200">
                Metas: Margen 34,5% · Ventas 3,58 M€ · ROE 0,0% · Cobertura 67%
              </div>
            </div>

            {/* P3 */}
            <div className="p-5 rounded-2xl border border-emerald-300 bg-emerald-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Período 3 · 2028</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-emerald-300 text-emerald-800 font-bold">Crecer Rentable</span>
              </div>
              <h4 className="text-sm font-bold text-slate-steel-900">Fortalecer Valor Sostenible</h4>
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                Consolidar beneficio neto, productividad industrial y marca; evaluar inversiones de modernización con flujos de caja reales.
              </p>
              <div className="text-[11px] font-mono text-slate-steel/70 pt-1 border-t border-emerald-300">
                Metas: Margen 35,5% · Ventas 3,76 M€ · ROE +2,0% · Cobertura 72%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. SECCIÓN 08: DECISIONES POR LÍNEA DE PRODUCTO
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-mineral-500 text-white flex items-center justify-center text-xs font-black shadow-xs">
              08
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Estrategia y Decisiones para Cada Línea Textil
              </h2>
              <p className="text-xs text-slate-steel/60">
                Enfoque paramétrico diferenciado según contribución al margen y perfil de demanda
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-steel/70">Portafolio</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Corbatas */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rosewood flex items-center gap-1.5">
                <Shirt className="w-4 h-4" />
                <span>Corbatas</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rosewood-light text-rosewood font-bold">
                84% Margen
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Proteger la Línea Principal</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Mantener calidad de materiales y precios competitivos sin caer en guerras de descuento. Renovar colecciones y sincronizar lotes fabriles con pedidos para preservar el margen histórico.
            </p>
          </div>

          {/* Bufandas */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Bufandas</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-steel-light text-slate-steel font-bold">
                Ocupación &gt;87%
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Desarrollar su Potencial</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Mejorar acabados y materias primas para justificar un ajuste de precio moderado (+2% a 3%). Impulsar la rotación con campañas promocionales y elevar la ocupación del telar por encima del 87%.
            </p>
          </div>

          {/* Calcetines */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-mineral-600 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rosewood" />
                <span>Calcetines</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rosewood-light text-rosewood font-bold">
                Corregir 153%
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-steel-900">Corregir la Pérdida por Unidad</h4>
            <p className="text-xs text-slate-steel/80 leading-relaxed">
              Reestructurar compras de hilo y costes de tejeduría. Optimizar canales de venta para evitar almacenamiento costoso y eliminar la producción que no cubra los costes variables directos.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. MÓDULOS DEL TORNEO: INTERNACIONALIZACIÓN & METODOLOGÍA
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-rosewood text-white flex items-center justify-center text-xs font-black shadow-xs">
              09
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Gobernanza del Torneo: Internacionalización y Metodología de Gestión
              </h2>
              <p className="text-xs text-slate-steel/60">
                Plantilla oficial del torneo · Diapositivas 12 y 13
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-steel/70">ACBSP Framework</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diapositiva 12: Internacionalización */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rosewood flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>Internacionalización (Diapositiva 12)</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingIntl) {
                    setIntlText(draftIntl);
                    setIsEditingIntl(false);
                    try { localStorage.setItem('finedge_internationalization_text', draftIntl); } catch {}
                  } else {
                    setDraftIntl(intlText);
                    setIsEditingIntl(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-rosewood transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingIntl ? <Check className="w-3.5 h-3.5 text-rosewood" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingIntl ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {isEditingIntl ? (
              <textarea
                value={draftIntl}
                onChange={(e) => setDraftIntl(e.target.value)}
                rows={4}
                className="w-full text-xs font-sans p-3 rounded-xl border border-rosewood bg-white text-slate-steel-900 focus:outline-none focus:ring-2 focus:ring-blush"
              />
            ) : (
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                {intlText}
              </p>
            )}

            <div className="p-2.5 rounded-lg bg-white border border-mineral/30 text-[11px] font-mono text-slate-steel/60">
              Auditoría: Simulación concentrada en el mercado doméstico de referencia.
            </div>
          </div>

          {/* Diapositiva 13: Metodología */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Metodología de Gestión (Diapositiva 13)</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingMethodology) {
                    setMethodologyText(draftMethodology);
                    setIsEditingMethodology(false);
                    try { localStorage.setItem('finedge_methodology_text', draftMethodology); } catch {}
                  } else {
                    setDraftMethodology(methodologyText);
                    setIsEditingMethodology(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-slate-steel-dark transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingMethodology ? <Check className="w-3.5 h-3.5 text-slate-steel" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingMethodology ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {isEditingMethodology ? (
              <textarea
                value={draftMethodology}
                onChange={(e) => setDraftMethodology(e.target.value)}
                rows={4}
                className="w-full text-xs font-sans p-3 rounded-xl border border-slate-steel bg-white text-slate-steel-900 focus:outline-none focus:ring-2 focus:ring-slate-steel-200"
              />
            ) : (
              <p className="text-xs text-slate-steel/80 leading-relaxed">
                {methodologyText}
              </p>
            )}

            <div className="p-2.5 rounded-lg bg-white border border-mineral/30 text-[11px] font-mono text-slate-steel/60">
              Proceso: Diagnóstico inicial → FODA → Calibración paramétrica → Conciliación de resultados.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. TRABAJO EN EQUIPO & EVALUACIÓN GLOBAL (14 Y 16)
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal space-y-6">
        <div className="flex items-center justify-between border-b border-mineral/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-xl bg-slate-steel text-white flex items-center justify-center text-xs font-black shadow-xs">
              10
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-steel-900">
                Trabajo en Equipo y Evaluación Global de la Simulación
              </h2>
              <p className="text-xs text-slate-steel/60">
                Plantilla oficial del torneo · Diapositivas 14 y 16
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-slate-steel/70">Autoevaluación</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diapositiva 14: Trabajo en Equipo */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rosewood flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>Trabajo en Equipo (Diapositiva 14)</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingTeamwork) {
                    setTeamworkIdeas(draftTeamworkIdeas);
                    setIsEditingTeamwork(false);
                    try { localStorage.setItem('finedge_teamwork_ideas', JSON.stringify(draftTeamworkIdeas)); } catch {}
                  } else {
                    setDraftTeamworkIdeas([...teamworkIdeas]);
                    setIsEditingTeamwork(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-rosewood transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingTeamwork ? <Check className="w-3.5 h-3.5 text-rosewood" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingTeamwork ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {/* 3 Ideas */}
            <div className="space-y-2.5">
              {teamworkIdeas.map((idea, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-mineral/30 text-xs">
                  <span className="font-mono font-bold text-rosewood mr-1.5">0{idx + 1}.</span>
                  {isEditingTeamwork ? (
                    <input
                      type="text"
                      value={draftTeamworkIdeas[idx]}
                      onChange={(e) => {
                        const copy = [...draftTeamworkIdeas] as [string, string, string];
                        copy[idx] = e.target.value;
                        setDraftTeamworkIdeas(copy);
                      }}
                      className="w-full text-xs font-sans mt-1 p-2 rounded border border-rosewood"
                    />
                  ) : (
                    <span className="text-slate-steel/90">{idea}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Calificación 1 a 5 */}
            <div className="flex items-center justify-between pt-2 border-t border-mineral/20">
              <span className="text-xs font-mono text-slate-steel/70">Autoevaluación del equipo:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => {
                      setTeamworkRating(star);
                      try { localStorage.setItem('finedge_teamwork_rating', star.toString()); } catch {}
                    }}
                    className="p-0.5 hover:scale-110 transition-transform"
                    title={`Calificar con ${star} estrellas`}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        star <= teamworkRating
                          ? 'fill-amber-400 text-amber-500'
                          : 'text-mineral/40'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-mono font-bold text-slate-steel ml-1">
                  {teamworkRating} / 5
                </span>
              </div>
            </div>
          </div>

          {/* Diapositiva 16: Evaluación Global */}
          <div className="p-5 rounded-2xl bg-mineral-50/60 border border-mineral/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-steel flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Evaluación Global y Recomendación (Diapositiva 16)</span>
              </span>
              <button
                onClick={() => {
                  if (isEditingEvaluation) {
                    setEvaluationText(draftEvaluation);
                    setIsEditingEvaluation(false);
                    try { localStorage.setItem('finedge_global_evaluation_text', draftEvaluation); } catch {}
                  } else {
                    setDraftEvaluation(evaluationText);
                    setIsEditingEvaluation(true);
                  }
                }}
                className="text-xs font-mono text-slate-steel/70 hover:text-slate-steel-dark transition-colors flex items-center gap-1 cursor-pointer"
              >
                {isEditingEvaluation ? <Check className="w-3.5 h-3.5 text-slate-steel" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditingEvaluation ? 'Guardar' : 'Editar'}</span>
              </button>
            </div>

            {isEditingEvaluation ? (
              <textarea
                value={draftEvaluation}
                onChange={(e) => setDraftEvaluation(e.target.value)}
                rows={6}
                className="w-full text-xs font-sans p-3 rounded-xl border border-slate-steel bg-white text-slate-steel-900 focus:outline-none focus:ring-2 focus:ring-slate-steel-200"
              />
            ) : (
              <div className="text-xs text-slate-steel/80 leading-relaxed whitespace-pre-line bg-white p-3.5 rounded-xl border border-mineral/30">
                {evaluationText}
              </div>
            )}

            {/* Recomendación NPS 1 a 10 */}
            <div className="flex items-center justify-between pt-2 border-t border-mineral/20">
              <span className="text-xs font-mono text-slate-steel/70">Recomendación de la simulación:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setRecommendationRating(num);
                      try { localStorage.setItem('finedge_recommendation_rating', num.toString()); } catch {}
                    }}
                    className={`w-5 h-5 rounded text-[10px] font-mono font-bold transition-all ${
                      num <= recommendationRating
                        ? 'bg-rosewood text-white shadow-2xs'
                        : 'bg-mineral-100 text-slate-steel/50 hover:bg-mineral-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <span className="text-xs font-mono font-bold text-rosewood ml-1">
                  {recommendationRating}/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. COMPROMISO FINEDGE Y CIERRE INSTITUCIONAL
         ======================================================== */}
      <section className="bg-white border border-mineral/40 rounded-3xl p-6 sm:p-8 shadow-minimal">
        <div className="bg-gradient-to-r from-slate-steel-900 via-slate-steel to-slate-steel-dark p-6 sm:p-8 rounded-2xl text-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-blush font-bold block">
                Declaración de Cierre
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Compromiso FinEdge · Creación de Valor Sostenible
              </h3>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-blush border border-white/20 self-start sm:self-auto">
              Simulación CORBATUL
            </span>
          </div>

          <p className="text-xs sm:text-sm text-mineral-200 leading-relaxed font-sans max-w-4xl">
            La gestión se orientará a recuperar la rentabilidad, fortalecer la marca y elevar el valor de <strong>CORBATUL</strong> con decisiones fundamentadas en indicadores objetivos, estricto control de costes y coordinación sinérgica entre todas las áreas. El crecimiento deberá sostenerse siempre en <strong>eficiencia operativa</strong> y <strong>disciplina financiera</strong>.
          </p>

          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-mineral-300">
            <div className="flex items-center gap-4">
              <span>Daniela Paola García Romero</span>
              <span>•</span>
              <span>Mario Fernando Gadvay Galarza</span>
              <span>•</span>
              <span>Dennis Sebastián Galarza Lagua</span>
            </div>
            <div className="text-[11px] text-blush">
              ESPOCH — FADE — Carrera de Finanzas (Noviembre 2026)
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
