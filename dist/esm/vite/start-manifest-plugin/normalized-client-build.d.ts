import { Rollup } from 'vite';
import { NormalizedClientBuild, NormalizedClientChunk } from '../../types.js';
export declare function normalizeViteClientChunk(chunk: Rollup.OutputChunk): NormalizedClientChunk;
export declare function normalizeViteClientChunks(clientBundle: Rollup.OutputBundle): ReadonlyMap<string, NormalizedClientChunk>;
export declare function normalizeViteClientBuild(clientBundle: Rollup.OutputBundle, inlineCssEnabled?: boolean): NormalizedClientBuild;
/**
 * Route files are recognised by the `tsr-split` query the code splitter adds.
 * Frameworks whose route files are themselves lazily imported components
 * (e.g. `.svelte` files) produce a dynamic entry chunk instead, so its facade
 * module is also a candidate. Candidates that are not route files are never
 * looked up by the manifest builder.
 */
export declare function getRouteFilePathsFromModuleIds(moduleIds: Array<string>, dynamicEntryModuleId?: string | null): string[];
export declare function getHydrationIdsFromModuleIds(moduleIds: Array<string>): string[];
