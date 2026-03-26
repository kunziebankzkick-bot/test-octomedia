import { GeoLandingPage } from './GeoLandingLayout';
import { geoConfigs } from './geoConfigs';

export function UKPage() {
  return <GeoLandingPage geo={geoConfigs.uk} />;
}

export function MaltaPage() {
  return <GeoLandingPage geo={geoConfigs.malta} />;
}

export function CuracaoPage() {
  return <GeoLandingPage geo={geoConfigs.curacao} />;
}

export function GermanyPage() {
  return <GeoLandingPage geo={geoConfigs.germany} />;
}

export function CanadaPage() {
  return <GeoLandingPage geo={geoConfigs.canada} />;
}

export function UAEPage() {
  return <GeoLandingPage geo={geoConfigs.uae} />;
}

export function IndiaPage() {
  return <GeoLandingPage geo={geoConfigs.india} />;
}
