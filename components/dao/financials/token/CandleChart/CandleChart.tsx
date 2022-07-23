import React from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons
} from "react-financial-charts";
import { initialData } from "./data";

const CandleChart: React.FC = () => {
  const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) => new Date(d.date)
  );
  const height = 700;
  const width = 900;
  const margin = { left: 0, right: 48, top: 50, bottom: 24 };


  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
    initialData
  );
  const pricesDisplayFormat = format(".2f");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_: any, h: number) => [0, h - barChartHeight];
  const chartHeight = gridHeight;

  const dateTimeFormat = "%d %b";

  const barChartExtents = (data: any) => {
    return data.volume;
  };

  const candleChartExtents = (data: any) => {
    return [data.high, data.low];
  };

  const yEdgeIndicator = (data: any) => {
    return data.close;
  };

  const volumeColor = (data: any) => {
    return data.close > data.open
      ? "rgba(38, 166, 154, 0.3)"
      : "rgba(239, 83, 80, 0.3)";
  };

  const volumeSeries = (data: any) => {
    return data.volume;
  };

  const openCloseColor = (data: any) => {
    return data.close > data.open ? "#26a69a" : "#ef5350";
  };

  return (
    <ChartCanvas
      height={height}
      ratio={3}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
      zoomAnchor={lastVisibleItemBasedZoomAnchor}
    >
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={barChartExtents}
      >
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart>
      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <XAxis showGridLines showTickLabel={false} />
        <YAxis showGridLines tickFormat={pricesDisplayFormat} />
        <CandlestickSeries />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />
        <EdgeIndicator
          itemType="last"
          rectWidth={margin.right}
          fill={openCloseColor}
          lineStroke={openCloseColor}
          displayFormat={pricesDisplayFormat}
          yAccessor={yEdgeIndicator}
        />

        <ZoomButtons />
        <OHLCTooltip origin={[0, -16]} fontSize={20} />
      </Chart>
    



      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default CandleChart;