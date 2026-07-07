currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/workspaces/project/hub.ts] *new* 
export interface Box {
    value: string;
}
export const make = (): Box => ({ value: "ok" });
//// [/home/src/workspaces/project/spoke1.ts] *new* 
import { make, type Box } from "./hub"; export const v1: Box = make();
//// [/home/src/workspaces/project/spoke2.ts] *new* 
import { make, type Box } from "./hub"; export const v2: Box = make();
//// [/home/src/workspaces/project/spoke3.ts] *new* 
import { make, type Box } from "./hub"; export const v3: Box = make();
//// [/home/src/workspaces/project/tsconfig.json] *new* 
{
    "compilerOptions": {
        "incremental": true,
        "noEmit": true,
        "strict": true,
        "module": "esnext"
    }
}

tsgo 
ExitStatus:: Success
Output::
//// [/home/src/tslibs/TS/Lib/lib.es2025.full.d.ts] *Lib*
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
interface SymbolConstructor {
    (desc?: string | number): symbol;
    for(name: string): symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}
declare const console: { log(msg: any): void; };
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2025.full.d.ts","./hub.ts","./spoke1.ts","./spoke2.ts","./spoke3.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"235f14c81060fc2849cb75a65ec4e9c8-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });","signature":"44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n","impliedNodeFormat":1},"1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();","e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();","232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();"],"fileIdsList":[[2]],"options":{"module":99,"strict":true},"referencedMap":[[3,1],[4,1],[5,1]],"affectedFilesPendingEmit":[2,3,4,5]}
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./hub.ts",
        "./spoke1.ts",
        "./spoke2.ts",
        "./spoke3.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2025.full.d.ts",
    "./hub.ts",
    "./spoke1.ts",
    "./spoke2.ts",
    "./spoke3.ts"
  ],
  "fileInfos": [
    {
      "fileName": "lib.es2025.full.d.ts",
      "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./hub.ts",
      "version": "235f14c81060fc2849cb75a65ec4e9c8-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });",
      "signature": "44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "235f14c81060fc2849cb75a65ec4e9c8-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });",
        "signature": "44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./spoke1.ts",
      "version": "1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();",
      "signature": "1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./spoke2.ts",
      "version": "e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();",
      "signature": "e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./spoke3.ts",
      "version": "232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();",
      "signature": "232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();",
      "impliedNodeFormat": "CommonJS"
    }
  ],
  "fileIdsList": [
    [
      "./hub.ts"
    ]
  ],
  "options": {
    "module": 99,
    "strict": true
  },
  "referencedMap": {
    "./spoke1.ts": [
      "./hub.ts"
    ],
    "./spoke2.ts": [
      "./hub.ts"
    ],
    "./spoke3.ts": [
      "./hub.ts"
    ]
  },
  "affectedFilesPendingEmit": [
    [
      "./hub.ts",
      "Js",
      2
    ],
    [
      "./spoke1.ts",
      "Js",
      3
    ],
    [
      "./spoke2.ts",
      "Js",
      4
    ],
    [
      "./spoke3.ts",
      "Js",
      5
    ]
  ],
  "size": 1673
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.es2025.full.d.ts
*refresh*    /home/src/workspaces/project/hub.ts
*refresh*    /home/src/workspaces/project/spoke1.ts
*refresh*    /home/src/workspaces/project/spoke2.ts
*refresh*    /home/src/workspaces/project/spoke3.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/hub.ts


Edit [0]:: comment change in hub
//// [/home/src/workspaces/project/hub.ts] *modified* 
export interface Box {
    value: string;
}
export const make = (): Box => ({ value: "ok" });
// comment only change


tsgo 
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","root":[[2,5]],"fileNames":["lib.es2025.full.d.ts","./hub.ts","./spoke1.ts","./spoke2.ts","./spoke3.ts"],"fileInfos":[{"version":"8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"fd6ba6c40dfdc250f86ff17cf5a8dd45-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });\n// comment only change\n","signature":"44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n","impliedNodeFormat":1},"1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();","e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();","232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();"],"fileIdsList":[[2]],"options":{"module":99,"strict":true},"referencedMap":[[3,1],[4,1],[5,1]],"affectedFilesPendingEmit":[2,3,4,5]}
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "root": [
    {
      "files": [
        "./hub.ts",
        "./spoke1.ts",
        "./spoke2.ts",
        "./spoke3.ts"
      ],
      "original": [
        2,
        5
      ]
    }
  ],
  "fileNames": [
    "lib.es2025.full.d.ts",
    "./hub.ts",
    "./spoke1.ts",
    "./spoke2.ts",
    "./spoke3.ts"
  ],
  "fileInfos": [
    {
      "fileName": "lib.es2025.full.d.ts",
      "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "8859c12c614ce56ba9a18e58384a198f-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./hub.ts",
      "version": "fd6ba6c40dfdc250f86ff17cf5a8dd45-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });\n// comment only change\n",
      "signature": "44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fd6ba6c40dfdc250f86ff17cf5a8dd45-export interface Box {\n    value: string;\n}\nexport const make = (): Box => ({ value: \"ok\" });\n// comment only change\n",
        "signature": "44472c8b67bd6237e0d068a714901d29-export interface Box {\n    value: string;\n}\nexport declare const make: () => Box;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./spoke1.ts",
      "version": "1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();",
      "signature": "1582891c712fced00e90716355a68871-import { make, type Box } from \"./hub\"; export const v1: Box = make();",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./spoke2.ts",
      "version": "e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();",
      "signature": "e199cb27f399c4d3190d9652f99b3890-import { make, type Box } from \"./hub\"; export const v2: Box = make();",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./spoke3.ts",
      "version": "232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();",
      "signature": "232b947ef5595e7d8d513f6dce1bb820-import { make, type Box } from \"./hub\"; export const v3: Box = make();",
      "impliedNodeFormat": "CommonJS"
    }
  ],
  "fileIdsList": [
    [
      "./hub.ts"
    ]
  ],
  "options": {
    "module": 99,
    "strict": true
  },
  "referencedMap": {
    "./spoke1.ts": [
      "./hub.ts"
    ],
    "./spoke2.ts": [
      "./hub.ts"
    ],
    "./spoke3.ts": [
      "./hub.ts"
    ]
  },
  "affectedFilesPendingEmit": [
    [
      "./hub.ts",
      "Js",
      2
    ],
    [
      "./spoke1.ts",
      "Js",
      3
    ],
    [
      "./spoke2.ts",
      "Js",
      4
    ],
    [
      "./spoke3.ts",
      "Js",
      5
    ]
  ],
  "size": 1699
}

tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/hub.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/hub.ts
